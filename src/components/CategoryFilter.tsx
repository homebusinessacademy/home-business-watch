'use client';

import { useState, useMemo } from 'react';
import { CompanyCard } from './CompanyCard';
import { Company } from '@/types';

interface CategoryFilterProps {
  companies: Company[];
}

export function CategoryFilter({ companies }: CategoryFilterProps) {
  const [sortBy, setSortBy] = useState<'rating' | 'cost_low' | 'alpha' | 'recent'>('rating');
  const [filterRating, setFilterRating] = useState<'all' | 'high' | 'medium' | 'low'>('all');

  const filtered = useMemo(() => {
    let result = [...companies];

    // Filter by rating
    if (filterRating === 'high') result = result.filter(c => c.overall_rating >= 4);
    else if (filterRating === 'medium') result = result.filter(c => c.overall_rating >= 3 && c.overall_rating < 4);
    else if (filterRating === 'low') result = result.filter(c => c.overall_rating < 3);

    // Sort
    if (sortBy === 'rating') result.sort((a, b) => b.overall_rating - a.overall_rating);
    else if (sortBy === 'cost_low') result.sort((a, b) => (a.monthly_cost_min ?? 999) - (b.monthly_cost_min ?? 999));
    else if (sortBy === 'alpha') result.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'recent') result.sort((a, b) => b.last_updated.localeCompare(a.last_updated));

    return result;
  }, [companies, sortBy, filterRating]);

  return (
    <>
      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6 items-center justify-between">
        <p className="text-gray-600 text-sm">
          Showing <span className="font-semibold text-gray-900">{filtered.length}</span> of {companies.length} companies
        </p>
        <div className="flex flex-wrap gap-3">
          {/* Rating filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 whitespace-nowrap">Rating:</label>
            <select
              value={filterRating}
              onChange={e => setFilterRating(e.target.value as typeof filterRating)}
              className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
            >
              <option value="all">All ratings</option>
              <option value="high">4+ stars</option>
              <option value="medium">3–4 stars</option>
              <option value="low">Under 3 stars</option>
            </select>
          </div>
          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 whitespace-nowrap">Sort by:</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as typeof sortBy)}
              className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
            >
              <option value="rating">Highest Rating</option>
              <option value="cost_low">Lowest Cost</option>
              <option value="alpha">Alphabetical</option>
              <option value="recent">Recently Updated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No companies match your filters.</p>
          <button
            onClick={() => { setSortBy('rating'); setFilterRating('all'); }}
            className="text-navy-600 hover:text-navy-800 font-medium mt-2 inline-block"
          >
            Clear filters →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(company => (
            <CompanyCard key={company.slug} company={company} />
          ))}
        </div>
      )}
    </>
  );
}
