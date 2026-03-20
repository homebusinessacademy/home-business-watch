import { Company } from '@/types';

export const companiesBatchA3: Company[] = [
  {
    id: '431',
    slug: 'dropshipping-shopify',
    name: 'Dropshipping on Shopify',
    category: 'other',
    founded_year: null,
    hq_location: null,
    website: 'https://shopify.com',
    products_summary: 'Dropshipping is a retail fulfillment model where you sell products without holding inventory. When a customer orders, you purchase from a third-party supplier who ships directly to them. Shopify is the most popular platform for building dropshipping stores.',
    monthly_cost_min: 39,
    monthly_cost_max: 399,
    comp_plan_type: 'E-commerce retail (you keep the profit margin)',
    overall_rating: 3.6,
    residual_rating: 3.0,
    simplicity_rating: 2.5,
    transparency_rating: 4.0,
    community_rating: 4.0,
    value_rating: 3.5,
    pros: [
      'Low startup costs — no inventory investment required',
      'Can test products and niches with minimal financial risk',
      'Work from anywhere with an internet connection',
      'Unlimited product selection through supplier networks'
    ],
    cons: [
      'Extremely competitive market with thin profit margins (10-30%)',
      'Long shipping times from overseas suppliers frustrate customers',
      'No quality control — you depend entirely on suppliers',
      'High customer service burden for issues you cannot control',
      'Most dropshipping stores fail within the first year'
    ],
    quick_facts: {
      'Platform Cost': 'Shopify $39-399/month + apps',
      'Startup Investment': '$500-2,000+ (ads, apps, domain)',
      'Profit Margins': 'Typically 10-30%',
      'Success Rate': 'Estimated 10-20% of stores become profitable',
      'Key Challenge': 'Paid advertising costs often exceed margins'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Sell products online without holding inventory',
    faq: [
      { question: 'Is dropshipping still profitable in 2025?', answer: 'Dropshipping can be profitable but is increasingly difficult. Rising ad costs, competition from Amazon, and customer expectations for fast shipping have squeezed margins. Success requires finding untapped niches, building a real brand, or exceptional marketing skills.' },
      { question: 'How much can you realistically make dropshipping?', answer: 'Most dropshippers earn little to nothing after expenses. Those who succeed typically make $1,000-5,000/month profit after 6-12 months of effort. The "guru" claims of $10,000+/month are rare and often misleading.' },
      { question: 'What are the biggest dropshipping mistakes?', answer: 'Common failures include: choosing oversaturated products, relying solely on AliExpress (slow shipping), spending too much on ads before validating demand, and underestimating customer service time. Building a real brand is now essential to succeed.' }
    ]
  },
  {
    id: '432',
    slug: 'amazon-fba',
    name: 'Amazon FBA (Fulfillment by Amazon)',
    category: 'other',
    founded_year: 2006,
    hq_location: 'Seattle, Washington, USA',
    website: 'https://sell.amazon.com',
    products_summary: 'Amazon FBA allows sellers to send products to Amazon warehouses. Amazon handles storage, shipping, customer service, and returns. Sellers benefit from Prime eligibility and Amazon\'s massive customer base of 300+ million active accounts.',
    monthly_cost_min: 0,
    monthly_cost_max: 40,
    comp_plan_type: 'E-commerce (product sales minus Amazon fees)',
    overall_rating: 3.9,
    residual_rating: 3.5,
    simplicity_rating: 3.0,
    transparency_rating: 3.5,
    community_rating: 4.0,
    value_rating: 3.5,
    pros: [
      'Access to Amazon\'s 300+ million active customers',
      'Prime eligibility dramatically increases conversion rates',
      'Amazon handles fulfillment, shipping, and customer service',
      'Scalable — can grow from side hustle to full business'
    ],
    cons: [
      'Significant upfront inventory investment required ($2,000-10,000+)',
      'Amazon fees consume 30-40% of sale price (referral + FBA fees)',
      'Intense competition — many products already have established sellers',
      'Account suspension risk for policy violations',
      'You\'re building on Amazon\'s platform, not your own asset'
    ],
    quick_facts: {
      'Account Types': 'Individual (free) or Professional ($39.99/mo)',
      'Total Fees': '30-40% of sale price (referral + FBA)',
      'Startup Investment': '$2,000-10,000+ for initial inventory',
      'Founded': '2006 (FBA launched)',
      'Key Stat': '60%+ of Amazon sales come from third-party sellers'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Sell products using Amazon\'s fulfillment network',
    faq: [
      { question: 'How much money do you need to start Amazon FBA?', answer: 'Realistically, $3,000-5,000 minimum to start properly. This covers: product samples ($200-500), initial inventory order ($1,500-3,000), product photography ($100-300), Amazon fees, and some PPC advertising budget. Starting with less often leads to failure.' },
      { question: 'What percentage of Amazon FBA sellers are profitable?', answer: 'Industry surveys suggest 50-65% of FBA sellers are profitable, but many earn modest returns. About 20% of sellers report profits exceeding $25,000/year. Success depends heavily on product selection, sourcing, and PPC advertising skills.' },
      { question: 'Is Amazon FBA saturated?', answer: 'Many product categories are highly competitive, but opportunities exist in underserved niches. Success in 2025 typically requires: private label branding, product differentiation, strong supplier relationships, and PPC advertising expertise. Retail arbitrage and wholesale are harder than ever.' }
    ]
  },
  {
    id: '433',
    slug: 'etsy',
    name: 'Etsy',
    category: 'other',
    founded_year: 2005,
    hq_location: 'Brooklyn, New York, USA',
    website: 'https://etsy.com',
    products_summary: 'Etsy is an online marketplace focused on handmade, vintage (20+ years old), and craft supplies. With 90+ million active buyers, it\'s the leading platform for artisans, crafters, and creative entrepreneurs selling unique goods.',
    monthly_cost_min: 0,
    monthly_cost_max: 15,
    comp_plan_type: 'Marketplace (listing fees + transaction percentage)',
    overall_rating: 4.0,
    residual_rating: 3.0,
    simplicity_rating: 4.0,
    transparency_rating: 3.5,
    community_rating: 4.5,
    value_rating: 3.5,
    pros: [
      'Free to start — only pay when you make sales',
      'Built-in audience of 90+ million buyers seeking handmade goods',
      'Lower barrier to entry than building your own website',
      'Strong community and seller support resources'
    ],
    cons: [
      'Fees add up: $0.20 listing + 6.5% transaction + 3%+ payment processing',
      'Highly competitive — 7+ million active sellers',
      'Algorithm changes can tank your shop visibility overnight',
      'Etsy\'s push toward "mass-produced" items dilutes handmade focus',
      'Building a sustainable business requires significant time investment'
    ],
    quick_facts: {
      'Founded': '2005 (Brooklyn, NY)',
      'Listing Fee': '$0.20 per item (4-month duration)',
      'Transaction Fee': '6.5% of sale price',
      'Payment Processing': '3% + $0.25 per transaction',
      'Active Sellers': '7+ million',
      'Active Buyers': '90+ million'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Marketplace for handmade and vintage goods',
    faq: [
      { question: 'How much do Etsy sellers actually make?', answer: 'Etsy seller income varies wildly. Data suggests the median Etsy shop makes under $1,000/year. However, top sellers (1-2%) can earn $50,000+/year. Success requires quality products, excellent photography, SEO optimization, and often paid advertising.' },
      { question: 'What sells best on Etsy?', answer: 'Top-selling categories include: personalized/custom items, digital downloads (printables, SVGs), jewelry, wedding items, home decor, and craft supplies. Digital products have high margins since there\'s no shipping or material cost per sale.' },
      { question: 'Is Etsy worth it with all the fees?', answer: 'Total fees (listing + transaction + payment) typically run 12-15% of sale price. This is competitive with other marketplaces but higher than running your own site. For most sellers, Etsy\'s built-in traffic justifies the fees until they can drive their own customers.' }
    ]
  },
  {
    id: '434',
    slug: 'ebay-selling',
    name: 'eBay Selling & Affiliate',
    category: 'other',
    founded_year: 1995,
    hq_location: 'San Jose, California, USA',
    website: 'https://ebay.com',
    products_summary: 'eBay is one of the world\'s largest online marketplaces with 130+ million active buyers. Sellers can list items via auction or fixed price. The eBay Partner Network offers affiliate commissions for driving traffic to eBay listings.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Marketplace sales or affiliate commissions (1-4%)',
    overall_rating: 3.8,
    residual_rating: 2.5,
    simplicity_rating: 4.0,
    transparency_rating: 4.0,
    community_rating: 3.5,
    value_rating: 4.0,
    pros: [
      'Free to start selling with up to 250 free listings/month',
      'Massive built-in audience of 130+ million active buyers',
      'Flexible formats: auction, fixed price, or best offer',
      'Great for flipping used items, collectibles, and vintage goods'
    ],
    cons: [
      'Final value fees of 13.25% on most categories plus payment processing',
      'Buyer-favored policies can lead to unfair return situations',
      'Intense competition with professional resellers',
      'Shipping logistics and customer service fall entirely on seller',
      'eBay Partner Network commissions are low (1-4%)'
    ],
    quick_facts: {
      'Founded': '1995 (San Jose, CA)',
      'Listing Fees': 'First 250/month free, then $0.35 each',
      'Final Value Fee': '13.25% most categories',
      'Active Buyers': '130+ million globally',
      'Affiliate Commissions': '1-4% via eBay Partner Network',
      'Business Model': 'Auction and fixed-price marketplace'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'The original online auction and marketplace',
    faq: [
      { question: 'Is selling on eBay still worth it?', answer: 'eBay remains viable for specific niches: collectibles, vintage items, used electronics, parts, and unique goods. It\'s less competitive than Amazon for commodity products. Success depends on finding items others overlook and providing excellent service.' },
      { question: 'How much can you make selling on eBay?', answer: 'Casual sellers might make a few hundred dollars clearing out their homes. Serious resellers report $1,000-5,000/month profit flipping thrift store finds, estate sales, or liquidation pallets. Top PowerSellers can earn $100K+/year but it\'s essentially a full-time job.' },
      { question: 'Is eBay affiliate marketing worth it?', answer: 'eBay Partner Network commissions (1-4%) are low compared to other affiliate programs. It can work for niche sites reviewing specific products available on eBay, but most affiliate marketers find higher-commission programs more lucrative.' }
    ]
  },
  {
    id: '435',
    slug: 'zazzle',
    name: 'Zazzle',
    category: 'other',
    founded_year: 2005,
    hq_location: 'Redwood City, California, USA',
    website: 'https://zazzle.com',
    products_summary: 'Zazzle is a print-on-demand marketplace where designers create products like t-shirts, mugs, posters, invitations, and more. Zazzle handles printing, shipping, and customer service. Designers earn royalties on each sale.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Royalties (5-99% designer-set, typically 10-15%)',
    overall_rating: 3.5,
    residual_rating: 3.5,
    simplicity_rating: 4.0,
    transparency_rating: 3.5,
    community_rating: 3.5,
    value_rating: 3.5,
    pros: [
      'Completely free to start — no upfront costs or inventory',
      'Passive income potential once designs are uploaded',
      'Designers set their own royalty rates (5-99%)',
      'Huge product catalog: 1,000+ customizable products'
    ],
    cons: [
      'Highly competitive marketplace with millions of designs',
      'Products are expensive, limiting buyer conversions',
      'Royalties typically small ($0.50-3 per sale at common rates)',
      'Zazzle controls pricing, promotions, and customer relationships',
      'Takes significant volume to earn meaningful income'
    ],
    quick_facts: {
      'Founded': '2005 (Redwood City, CA)',
      'Cost to Start': 'Free',
      'Royalty Range': '5-99% (designer chooses)',
      'Typical Royalty': '10-15% for competitive pricing',
      'Products Available': '1,000+ customizable items',
      'Payment Threshold': '$50 minimum payout'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Print-on-demand marketplace for designers',
    faq: [
      { question: 'How much can you make on Zazzle?', answer: 'Most Zazzle designers earn very little — often under $100/year. Successful designers with hundreds of quality designs in popular niches report $500-2,000/month. A small percentage earn $5,000+/month, but this requires thousands of designs and strong SEO.' },
      { question: 'Is Zazzle better than Redbubble or Merch by Amazon?', answer: 'Each has trade-offs. Zazzle offers higher royalty control and more product types but has smaller traffic than Merch by Amazon. Many designers upload to multiple platforms to maximize exposure. Merch by Amazon has highest volume but requires approval.' },
      { question: 'What sells best on Zazzle?', answer: 'Wedding invitations/stationery, business cards, and niche-specific designs (hobbies, professions, fandoms) perform well. Seasonal designs and trending topics can generate short-term spikes. Consistent uploading of quality designs is key to long-term success.' }
    ]
  },
  {
    id: '436',
    slug: 'society6',
    name: 'Society6',
    category: 'other',
    founded_year: 2009,
    hq_location: 'Los Angeles, California, USA',
    website: 'https://society6.com',
    products_summary: 'Society6 is an artist marketplace where creators upload artwork that\'s printed on products like art prints, home decor, apparel, tech accessories, and more. Society6 handles production, shipping, and customer service. Artists earn royalties on sales.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Royalties (10% most products, up to 30% art prints)',
    overall_rating: 3.5,
    residual_rating: 3.5,
    simplicity_rating: 4.0,
    transparency_rating: 3.0,
    community_rating: 4.0,
    value_rating: 3.0,
    pros: [
      'Free to join — no costs, inventory, or shipping to handle',
      'Beautiful platform that showcases art professionally',
      'Passive income from existing artwork portfolio',
      'Owned by Leaf Group (media company) with marketing reach'
    ],
    cons: [
      'Low base royalties: 10% on most products, 30% max on art prints',
      'Products are premium-priced, limiting buyer pool',
      'No control over pricing or promotions',
      'Frequent sales and discounts reduce already-thin margins',
      'Highly saturated with artists — discovery is challenging'
    ],
    quick_facts: {
      'Founded': '2009 (Los Angeles, CA)',
      'Cost to Start': 'Free',
      'Art Print Royalty': 'Up to 30% (artist sets margin)',
      'Other Products': '10% flat royalty',
      'Parent Company': 'Leaf Group (media company)',
      'Payment': 'Monthly, PayPal, $1 minimum'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Artist marketplace for art prints and home decor',
    faq: [
      { question: 'How much do Society6 artists make?', answer: 'Most artists earn very little on Society6 alone. Royalties of $1-5 per product sale mean you need high volume to earn meaningful income. Artists report typical earnings of $50-200/month unless they have large followings driving external traffic.' },
      { question: 'Is Society6 worth it for artists?', answer: 'As a passive income supplement to existing art, it can be worthwhile since there\'s no cost to join. However, it shouldn\'t be your primary income strategy. Most successful Society6 artists drive traffic from Instagram, YouTube, or their own websites.' },
      { question: 'Society6 vs Redbubble: Which is better?', answer: 'Society6 has a more curated, premium aesthetic while Redbubble offers higher royalties on many products and more product variety. Many artists upload to both. Redbubble generally has better discoverability; Society6 requires more external marketing.' }
    ]
  },
  {
    id: '437',
    slug: 'creative-market',
    name: 'Creative Market',
    category: 'other',
    founded_year: 2012,
    hq_location: 'San Francisco, California, USA',
    website: 'https://creativemarket.com',
    products_summary: 'Creative Market is a marketplace for digital design assets: fonts, graphics, templates, themes, photos, and add-ons. Designers sell directly to other creatives and businesses. Known for high-quality, curated design resources.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Revenue share (40% exclusive, 60% non-exclusive)',
    overall_rating: 3.9,
    residual_rating: 4.0,
    simplicity_rating: 3.5,
    transparency_rating: 4.0,
    community_rating: 4.0,
    value_rating: 4.0,
    pros: [
      'High-quality marketplace with curated sellers',
      'Strong passive income potential from digital products',
      '40-60% royalty rates are competitive for digital goods',
      'Professional audience willing to pay for quality'
    ],
    cons: [
      'Competitive application process — not everyone is accepted',
      'Non-exclusive sellers earn only 40% (exclusive get 60%)',
      'Highly saturated categories (fonts, mockups) are hard to break into',
      'Requires professional-level design skills to compete',
      'Platform takes significant cut of each sale'
    ],
    quick_facts: {
      'Founded': '2012 (San Francisco, CA)',
      'Cost to Start': 'Free (must apply and be accepted)',
      'Non-Exclusive Royalty': '40% of sale',
      'Exclusive Royalty': '60% of sale',
      'Payment': 'PayPal, $20 minimum',
      'Categories': 'Fonts, graphics, templates, themes, photos'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Premium marketplace for design assets',
    faq: [
      { question: 'How much can you make on Creative Market?', answer: 'Top sellers report $5,000-20,000+/month, but these are established designers with extensive catalogs. New sellers typically earn $100-500/month in the first year. Success requires a significant library of high-quality, in-demand design assets.' },
      { question: 'How hard is it to get accepted to Creative Market?', answer: 'Creative Market has a curation process and not all applicants are accepted. You need to demonstrate professional-quality work and a cohesive portfolio. Rejection is common but you can reapply after improving your portfolio.' },
      { question: 'Is Creative Market better than Envato?', answer: 'Creative Market offers higher royalties (40-60% vs Envato\'s 12-75%) but may have lower volume. Many sellers use both platforms. Envato (which owns ThemeForest, GraphicRiver) has more traffic but takes a larger cut, especially for non-exclusive items.' }
    ]
  },
  {
    id: '438',
    slug: 'toptal',
    name: 'Toptal',
    category: 'other',
    founded_year: 2010,
    hq_location: 'San Francisco, California, USA',
    website: 'https://toptal.com',
    products_summary: 'Toptal is an exclusive freelance network for elite software developers, designers, finance experts, and project managers. Known for rigorous vetting (claims 3% acceptance rate), connecting top talent with Fortune 500 companies and well-funded startups.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Freelance (hourly/project rates minus Toptal margin)',
    overall_rating: 4.2,
    residual_rating: 2.0,
    simplicity_rating: 3.0,
    transparency_rating: 3.5,
    community_rating: 4.0,
    value_rating: 4.0,
    pros: [
      'Premium rates: developers often bill $80-200+/hour',
      'High-quality clients (Fortune 500, funded startups)',
      'Toptal handles client acquisition and billing',
      'Exclusive network creates prestige and community'
    ],
    cons: [
      'Extremely difficult to get in — 3% claimed acceptance rate',
      'Multi-stage screening: technical tests, live coding, project trial',
      'Toptal takes significant margin (rumored 30-50%)',
      'Must maintain availability and performance standards',
      'Not transparent about exact Toptal margin per project'
    ],
    quick_facts: {
      'Founded': '2010 (San Francisco, CA)',
      'Cost to Apply': 'Free',
      'Acceptance Rate': '~3% claimed',
      'Freelancer Pay': 'Premium rates ($80-200+/hr for developers)',
      'Categories': 'Developers, designers, finance, project managers',
      'Screening Process': '3-5 weeks (technical + soft skills)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Exclusive network for top 3% of freelance talent',
    faq: [
      { question: 'How hard is it to get into Toptal?', answer: 'Very hard. The process includes: initial screening, technical assessment, live technical interview, and a test project. Claims suggest only 3% of applicants pass. Strong experience at top companies or demonstrated expertise significantly helps.' },
      { question: 'How much do Toptal freelancers make?', answer: 'Toptal developers typically charge $80-200+/hour to clients. Toptal takes a margin (reportedly 30-50%), but freelancers still earn significantly more than average freelance rates. Finance experts and designers earn similarly premium rates.' },
      { question: 'Is Toptal worth it for freelancers?', answer: 'If you can get in, yes. The premium client base and steady work stream make the Toptal margin worthwhile for most. However, you trade some rate control and independence for their sales/matching services. Not for everyone, but elite freelancers often thrive.' }
    ]
  },
  {
    id: '439',
    slug: '99designs',
    name: '99designs',
    category: 'other',
    founded_year: 2008,
    hq_location: 'Melbourne, Australia',
    website: 'https://99designs.com',
    products_summary: '99designs is a design contest and freelance platform. Clients post design briefs (logos, websites, packaging) and designers compete by submitting concepts. The winning designer gets paid. Also offers direct 1-to-1 project hiring.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Contest winnings or project fees (minus platform fee)',
    overall_rating: 3.5,
    residual_rating: 1.5,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 3.0,
    value_rating: 3.0,
    pros: [
      'Free to join and compete in design contests',
      'Large client base seeking logo, web, and branding work',
      '1-to-1 projects available for established designers',
      'Portfolio building opportunity for newer designers'
    ],
    cons: [
      'Contest model is "spec work" — most designers work for free',
      'Only 1 winner per contest; others get nothing for their effort',
      'Races to the bottom on pricing in competitive contests',
      'Controversial in design community for devaluing professional work',
      '99designs takes 5-15% platform fee from designers'
    ],
    quick_facts: {
      'Founded': '2008 (Melbourne, Australia)',
      'Cost to Start': 'Free to join',
      'Platform Fee': '5-15% depending on level',
      'Business Model': 'Design contests + 1-to-1 projects',
      'Owned By': 'Vista (Vistaprint parent company)',
      'Designer Levels': 'Entry, Mid, Top — affects visibility'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Design contest and freelance platform',
    faq: [
      { question: 'Can you make money on 99designs?', answer: 'Some designers do, but it\'s challenging. Contest winners earn $200-2,000+ per logo contest, but most submissions win nothing. Top-level designers with strong portfolios can earn $2,000-5,000/month through 1-to-1 projects, but building to that level takes time.' },
      { question: 'Is 99designs spec work?', answer: 'Yes, the contest model is spec work — designers create work without guaranteed payment, hoping to win. This is controversial in the professional design community. Many argue it devalues design work and exploits emerging designers.' },
      { question: 'Is 99designs good for beginning designers?', answer: 'It can help build a portfolio and gain experience with real briefs. However, the spec work model means lots of unpaid effort. Consider it a learning tool, not a reliable income source. Building direct client relationships pays better long-term.' }
    ]
  },
  {
    id: '440',
    slug: 'peopleperhour',
    name: 'PeoplePerHour',
    category: 'other',
    founded_year: 2007,
    hq_location: 'London, United Kingdom',
    website: 'https://peopleperhour.com',
    products_summary: 'PeoplePerHour is a UK-based freelance marketplace connecting businesses with freelancers for web development, design, writing, marketing, and business services. Offers both project-based and hourly work. Strong in European markets.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Freelance (project/hourly minus 20% service fee)',
    overall_rating: 3.6,
    residual_rating: 2.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 3.0,
    value_rating: 3.5,
    pros: [
      'Free to join with 15 free proposals/month',
      'Strong in UK and European markets',
      '"Hourlies" feature for productized services',
      'Lower competition than Upwork/Fiverr for some niches'
    ],
    cons: [
      '20% service fee on earnings (reduces to 7.5% at £5,000+)',
      'Smaller client base than Upwork or Fiverr',
      'Limited to 15 free proposals/month (must buy more)',
      'Payment release can be slow (escrow system)',
      'Customer support can be slow to respond'
    ],
    quick_facts: {
      'Founded': '2007 (London, UK)',
      'Cost to Start': 'Free (15 proposals/month)',
      'Service Fee': '20% (reduces to 7.5% above £5,000)',
      'Extra Proposals': 'Must purchase after 15/month',
      'Payment Protection': 'WorkStream escrow system',
      'Focus': 'UK/European freelance market'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'UK-based freelance marketplace',
    faq: [
      { question: 'How much can you earn on PeoplePerHour?', answer: 'Earnings vary widely by skill and experience. Web developers and designers typically charge £30-100/hour. Writers and virtual assistants earn £15-50/hour. Top freelancers report earning £3,000-10,000/month, but this requires consistent client acquisition.' },
      { question: 'PeoplePerHour vs Upwork: Which is better?', answer: 'PeoplePerHour is stronger for UK/European clients and has lower fees at higher earnings. Upwork has a larger global client base but higher fees (20% up to $500). Many freelancers use both. Your location and niche matter for which performs better.' },
      { question: 'What are Hourlies on PeoplePerHour?', answer: 'Hourlies are fixed-price, productized services you create (like Fiverr gigs). Clients can buy them directly without proposals. They\'re a good way to create passive income streams for repeatable services like logo design, article writing, or website audits.' }
    ]
  },
  {
    id: '441',
    slug: 'guru',
    name: 'Guru.com',
    category: 'other',
    founded_year: 1998,
    hq_location: 'Pittsburgh, Pennsylvania, USA',
    website: 'https://guru.com',
    products_summary: 'Guru is one of the oldest freelance marketplaces, operating since 1998. Connects businesses with freelancers across programming, design, writing, admin, and professional services. Known for SafePay escrow and work room collaboration tools.',
    monthly_cost_min: 0,
    monthly_cost_max: 50,
    comp_plan_type: 'Freelance (project/hourly minus 5-9% fee)',
    overall_rating: 3.4,
    residual_rating: 2.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 3.0,
    value_rating: 3.5,
    pros: [
      'Lower fees than competitors (5-9% vs 20%)',
      'Long-established platform with consistent job flow',
      'Work room tools for project collaboration',
      'SafePay escrow protects freelancer payments'
    ],
    cons: [
      'Smaller job pool than Upwork or Freelancer',
      'Free tier limited to 10 bids/month',
      'Premium memberships required for competitive advantages',
      'Interface feels dated compared to newer platforms',
      'Lower-budget clients on average'
    ],
    quick_facts: {
      'Founded': '1998 (Pittsburgh, PA)',
      'Freelancer Fee': '5-9% depending on membership',
      'Free Bids': '10 per month on basic plan',
      'Premium Plans': '$8.95-49.95/month',
      'Payment': 'SafePay escrow system',
      'Categories': 'Programming, design, writing, admin, finance'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Veteran freelance marketplace since 1998',
    faq: [
      { question: 'Is Guru.com legit?', answer: 'Yes, Guru has operated since 1998 and is a legitimate freelance platform. The SafePay escrow system protects payments. However, like all freelance platforms, watch out for scam job postings and clients who try to move communication off-platform.' },
      { question: 'Guru.com vs Upwork: Which is better?', answer: 'Guru has lower fees (5-9% vs 20%) but smaller job volume. Upwork dominates the freelance market with more clients but higher fees. Guru can be a good secondary platform, especially for experienced freelancers seeking lower-fee alternatives.' },
      { question: 'How much can you make on Guru?', answer: 'Earnings depend on skills and effort. Full-time freelancers on Guru report $2,000-6,000/month. However, the smaller job pool means more competition for each posting. Most use Guru alongside other platforms rather than exclusively.' }
    ]
  },
  {
    id: '442',
    slug: 'taskrabbit',
    name: 'TaskRabbit',
    category: 'other',
    founded_year: 2008,
    hq_location: 'San Francisco, California, USA',
    website: 'https://taskrabbit.com',
    products_summary: 'TaskRabbit connects "Taskers" with local clients needing help with furniture assembly, moving, cleaning, handyman work, deliveries, and more. Acquired by IKEA in 2017. Available in 60+ cities across US, Canada, UK, and Europe.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Gig work (hourly rate minus 15% service fee)',
    overall_rating: 3.7,
    residual_rating: 1.5,
    simplicity_rating: 4.0,
    transparency_rating: 3.5,
    community_rating: 3.0,
    value_rating: 3.5,
    pros: [
      'Set your own hourly rates (typically $20-100/hour)',
      'Flexible schedule — work when you want',
      'IKEA partnership provides steady furniture assembly jobs',
      'Quick payment processing (direct deposit)'
    ],
    cons: [
      '15% service fee on all earnings',
      'Must be in a TaskRabbit city — limited geographic availability',
      '$25 registration fee in some areas',
      'No benefits, insurance, or job security (gig economy)',
      'Client ratings heavily impact task visibility'
    ],
    quick_facts: {
      'Founded': '2008 (San Francisco, CA)',
      'Owned By': 'IKEA (since 2017)',
      'Service Fee': '15% of task earnings',
      'Registration Fee': '$25 in some markets',
      'Availability': '60+ cities (US, Canada, UK, Europe)',
      'Common Tasks': 'Assembly, moving, cleaning, handyman'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Local gig platform for tasks and errands',
    faq: [
      { question: 'How much do TaskRabbit Taskers make?', answer: 'Taskers set their own rates, typically $20-50/hour for general tasks, $50-100+/hour for skilled work like electrical or plumbing. After the 15% fee, full-time Taskers report earning $500-2,000/week depending on city, skills, and availability.' },
      { question: 'Is TaskRabbit worth it after fees?', answer: 'For many, yes. The 15% fee is offset by TaskRabbit\'s client acquisition and payment handling. Compare to finding clients yourself where you\'d spend time/money on marketing. Most successful Taskers treat the fee as a reasonable cost of doing business.' },
      { question: 'What are the best-paying TaskRabbit tasks?', answer: 'Skilled trades (electrical, plumbing) pay highest at $60-100+/hour. IKEA furniture assembly is steady work at $30-50/hour. Moving help pays $30-60/hour. General cleaning and errands are lower at $20-35/hour but more available.' }
    ]
  },
  {
    id: '443',
    slug: 'rover',
    name: 'Rover',
    category: 'other',
    founded_year: 2011,
    hq_location: 'Seattle, Washington, USA',
    website: 'https://rover.com',
    products_summary: 'Rover is the largest online marketplace for pet care services. Pet sitters and dog walkers offer dog boarding, house sitting, drop-in visits, doggy day care, and dog walking. Merged with competitor DogVacay in 2017.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Gig work (your rates minus 15-20% service fee)',
    overall_rating: 3.8,
    residual_rating: 2.0,
    simplicity_rating: 4.0,
    transparency_rating: 3.5,
    community_rating: 4.0,
    value_rating: 3.5,
    pros: [
      'Set your own rates and schedule',
      'Work with animals — ideal for pet lovers',
      'Multiple service options: boarding, walking, drop-ins',
      'Get paid for caring for pets in your own home'
    ],
    cons: [
      '15-20% service fee depending on service type',
      'Liability concerns — accidents, escapes, or injuries',
      'Inconsistent income without building repeat clients',
      'Competition from cheaper sitters drives rates down',
      'Background check required ($25-40 fee in some areas)'
    ],
    quick_facts: {
      'Founded': '2011 (Seattle, WA)',
      'Service Fee': '15-20% per booking',
      'Background Check': 'Required ($25-40 in some areas)',
      'Guarantee': '$25,000 vet care coverage + liability',
      'Services': 'Boarding, sitting, walking, drop-ins, day care',
      'Merged With': 'DogVacay (2017)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Pet sitting and dog walking marketplace',
    faq: [
      { question: 'How much do Rover sitters make?', answer: 'Rates vary by city and service. Dog boarding averages $25-50/night, dog walking $15-30/walk. After Rover\'s 15-20% fee, active sitters report earning $1,000-3,000/month part-time. Full-time sitters in busy markets can earn $4,000-6,000/month.' },
      { question: 'Is Rover safe for sitters?', answer: 'Rover provides $25,000 in veterinary care coverage and 24/7 support. However, sitters assume real liability for pets in their care. Some sitters purchase additional liability insurance. Most experiences are positive, but incidents do occur.' },
      { question: 'How do you succeed on Rover?', answer: 'Key factors: professional photos, detailed profile, quick response times, competitive (but not cheapest) pricing, and accumulating 5-star reviews. Building repeat clients reduces reliance on the platform. Many successful sitters also market outside Rover.' }
    ]
  },
  {
    id: '444',
    slug: 'care-com',
    name: 'Care.com',
    category: 'other',
    founded_year: 2006,
    hq_location: 'Waltham, Massachusetts, USA',
    website: 'https://care.com',
    products_summary: 'Care.com is the largest online marketplace for finding and managing family care. Connects families with caregivers for child care (nannies, babysitters), senior care, pet care, housekeeping, and tutoring. Owned by IAC since 2020.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Caregiver rates (families pay subscription to contact you)',
    overall_rating: 3.6,
    residual_rating: 2.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.0,
    community_rating: 3.0,
    value_rating: 3.5,
    pros: [
      'Free to create a caregiver profile',
      'Large platform with millions of families searching',
      'Multiple care categories: child, senior, pet, tutoring',
      'Set your own rates and availability'
    ],
    cons: [
      'Families must pay $40+/month subscription to contact you',
      'No payment processing — you arrange pay directly with families',
      'Background checks cost extra ($59-238 depending on package)',
      'Competition is intense in most metropolitan areas',
      'Controversial history with safety incidents and vetting'
    ],
    quick_facts: {
      'Founded': '2006 (Waltham, MA)',
      'Cost for Caregivers': 'Free to create profile',
      'Background Check': '$59-238 (optional but recommended)',
      'Family Subscription': '$40+/month to contact caregivers',
      'Owned By': 'IAC (since 2020)',
      'Categories': 'Child care, senior care, pet care, housekeeping, tutoring'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Marketplace for family care services',
    faq: [
      { question: 'How much do Care.com caregivers earn?', answer: 'Rates vary significantly by location and care type. Babysitters typically earn $15-25/hour, nannies $18-35/hour, senior caregivers $15-30/hour. Rates are negotiated directly with families. Big city rates are higher; rural areas lower.' },
      { question: 'Is Care.com safe and legitimate?', answer: 'Care.com is a real platform, but has faced criticism over safety incidents. They offer background checks but don\'t require them. Caregivers should get their own background checks for credibility. Both sides should verify credentials and references carefully.' },
      { question: 'Is Care.com free for caregivers?', answer: 'Creating a profile is free. However, families must pay a subscription ($40+/month) to contact you. Optional background checks cost $59-238. Some caregivers find the free profile gets limited responses since many families use the free tier and can\'t message directly.' }
    ]
  },
  {
    id: '445',
    slug: 'cambly',
    name: 'Cambly',
    category: 'other',
    founded_year: 2012,
    hq_location: 'San Francisco, California, USA',
    website: 'https://cambly.com',
    products_summary: 'Cambly is an online English tutoring platform connecting native English speakers with students worldwide for conversation practice. No teaching degree required. Tutors video chat with students on-demand or via scheduled sessions.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Per-minute tutoring ($0.17/min = ~$10.20/hour)',
    overall_rating: 3.5,
    residual_rating: 1.5,
    simplicity_rating: 4.5,
    transparency_rating: 4.0,
    community_rating: 3.5,
    value_rating: 3.0,
    pros: [
      'No degree or teaching certification required',
      'Flexible schedule — work when you want',
      'Simple platform — just have conversations',
      'Weekly payments via PayPal'
    ],
    cons: [
      'Low pay: $0.17/minute equals only ~$10.20/hour',
      'No guaranteed hours — depends on student demand',
      'Must be available for students across time zones',
      'No paid prep time — only paid when talking to students',
      'Cannot raise your rate regardless of experience'
    ],
    quick_facts: {
      'Founded': '2012 (San Francisco, CA)',
      'Pay Rate': '$0.17/minute (~$10.20/hour)',
      'Requirements': 'Native English speaker, no degree needed',
      'Payment': 'Weekly via PayPal',
      'Schedule': 'Flexible, on-demand or reservations',
      'Platform': 'Video chat tutoring'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Online English tutoring for conversation practice',
    faq: [
      { question: 'Is Cambly worth it for tutors?', answer: 'At $10.20/hour, Cambly pays well below minimum wage in most developed countries. It can work as pocket money for flexible hours, but it\'s not sustainable as primary income. Consider it supplemental income or for those in lower cost-of-living areas.' },
      { question: 'How many hours can you work on Cambly?', answer: 'Hours aren\'t guaranteed. You can set your availability, but actual hours depend on student demand. Some tutors report 10-20 hours/week of actual tutoring time. Peak hours are evenings/nights (US time) when Asian students are awake.' },
      { question: 'Cambly vs VIPKid or other tutoring platforms?', answer: 'VIPKid pays more ($14-22/hour) but requires a degree and formal lesson plans. Cambly is easier to join — just conversational practice with no planning. The trade-off is lower pay. For credentialed teachers, VIPKid or similar platforms pay better.' }
    ]
  }
];
