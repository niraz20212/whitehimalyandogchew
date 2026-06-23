import { Award, CheckCircle2, HeartHandshake, Leaf, Milk, Mountain, PackageCheck, ShieldCheck, Sparkles, WheatOff } from "lucide-react";

export const site = {
  name: "White Himalayan Dog Chew",
  description:
    "Premium Himalayan yak chews made with traditional mountain methods for healthy, happy dogs.",
  url: "https://whitehimalayandogchew.com",
};

export const trustIndicators = [
  { label: "100% Natural", icon: Leaf },
  { label: "Handmade by Farmers", icon: HeartHandshake },
  { label: "Fair Trade", icon: Award },
  { label: "High Protein", icon: Sparkles },
  { label: "Low Lactose", icon: Milk },
  { label: "Grain Free", icon: WheatOff },
];

export const products = [
  {
    slug: "cheese-puff",
    name: "Cheese Puff",
    category: "Puff",
    size: "Crunchy puff bites",
    price: 8.99,
    badge: "Puff",
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=900&q=80",
    description: "Crunchy, airy churpi puffs made for lighter snack moments.",
    color: "#c88d52",
    shape: "puffs",
  },
  {
    slug: "waffles",
    name: "Waffles",
    category: "Waffle",
    size: "Textured chew squares",
    price: 11.99,
    badge: "Waffle",
    image: "https://images.unsplash.com/photo-1601758064130-695a4e9e20e1?auto=format&fit=crop&w=900&q=80",
    description: "Grid-textured chews for satisfying surface crunch and enrichment.",
    color: "#bd844a",
    shape: "waffle",
  },
  {
    slug: "small-yak-chew",
    name: "Small",
    category: "Churpi",
    size: "32 g",
    price: 15.99,
    badge: "Churpi",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=80",
    description: "A compact, long-lasting chew for petite dogs and careful nibblers.",
    color: "#d99735",
    shape: "sticks",
  },
  {
    slug: "medium-yak-chew",
    name: "Medium",
    category: "Churpi",
    size: "70 g",
    price: 19.99,
    badge: "Churpi",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    description: "Balanced density and chew time for everyday enrichment.",
    color: "#c9822e",
    shape: "sticks",
  },
  {
    slug: "large-yak-chew",
    name: "Large",
    category: "Churpi",
    size: "100 g",
    price: 24.99,
    badge: "Churpi",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
    description: "A satisfying mountain-style chew for larger dogs who need more time.",
    color: "#d3923e",
    shape: "bundle",
  },
  {
    slug: "extra-large-yak-chew",
    name: "Extra Large",
    category: "Churpi",
    size: "142 g",
    price: 29.99,
    badge: "Churpi",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80",
    description: "Dense and durable for strong jaws, slow sessions, and happy routines.",
    color: "#cf8b34",
    shape: "bundle",
  },
  {
    slug: "xxl-yak-chew",
    name: "XXL",
    category: "Churpi",
    size: "175 g",
    price: 34.99,
    badge: "Churpi",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80",
    description: "Oversized churpi for powerful chewers and longer sessions.",
    color: "#d69b4e",
    shape: "sticks",
  },
  {
    slug: "jumbo-yak-chew",
    name: "Jumbo",
    category: "Churpi",
    size: "200 g",
    price: 39.99,
    badge: "Churpi",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80",
    description: "Our largest chew, made for giant breeds and serious chewers.",
    color: "#bf7628",
    shape: "bundle",
  },
  ...[
    ["turmeric", "Turmeric", "#d9a11c"],
    ["strawberry-apple", "Strawberry Apple", "#c93d55"],
    ["pumpkin", "Pumpkin", "#e28a18"],
    ["peanut-butter", "Peanut Butter", "#d6a45b"],
    ["mint", "Mint", "#47b84e"],
    ["flax-seed", "Flax Seed", "#e8c479"],
    ["drymint", "Drymint", "#8b714f"],
    ["cranberry", "Cranberry", "#d93d5d"],
    ["coconut", "Coconut", "#efd9a8"],
    ["blueberry", "Blueberry", "#654186"],
  ].map(([slug, name, color]) => ({
    slug: `${slug}-yak-chew`,
    name,
    category: "Flavored Churpi",
    size: "70/100/142 g",
    price: 18.99,
    badge: "Flavored",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80",
    description: `${name} flavored churpi, naturally firm and made for joyful chewing.`,
    color,
    shape: "sticks",
  })),
] as const;

export const processSteps = [
  {
    title: "Milk Collection & Quality Testing",
    text: "Fresh yak or cow milk is collected, filtered, and tested for quality.",
    icon: Milk,
    image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heating & Pasteurization",
    text: "The milk is heated and pasteurized to ensure safety.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Natural Curdling",
    text: "Lime juice is added to curdle the milk and form curds.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Whey Separation & Draining",
    text: "The curds are separated from the whey and drained thoroughly.",
    icon: PackageCheck,
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pressing & Cheese Block Formation",
    text: "The curds are pressed to remove moisture and shaped into cheese blocks.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cutting Into Chew Sizes",
    text: "The cheese blocks are cut into the required chew sizes and shapes.",
    icon: CheckCircle2,
    image: "https://images.unsplash.com/photo-1581092335397-9fa3411086d4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Smoke-Drying & Aging",
    text: "The chews are smoke-dried and aged for several weeks to achieve their hard texture.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Inspection, Grading & Packaging",
    text: "The finished chews are inspected, graded, and packaged for sale.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1581092335397-9fa3411086d4?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials = [
  {
    quote: "Our retriever settles in with one after every hike. It lasts, it smells clean, and the ingredient list is beautifully simple.",
    name: "Maya R.",
    detail: "Golden retriever parent",
  },
  {
    quote: "Finally, a premium chew that feels aligned with how we feed our dog. No fillers, no crumbs everywhere, just a happy pup.",
    name: "Theo B.",
    detail: "Wellness-focused dog dad",
  },
  {
    quote: "The jumbo size holds up to our shepherd mix. We love that the farmers are part of the story, not hidden behind the brand.",
    name: "Amara S.",
    detail: "Rescue dog family",
  },
];

export const faqs = [
  {
    q: "What are Himalayan yak chews made from?",
    a: "They are traditionally made from yak and cow milk, lime juice, and a small amount of salt, then pressed and aged into a hard natural chew.",
  },
  {
    q: "Are these chews safe for puppies?",
    a: "They are best for supervised chewing and dogs with adult teeth. For puppies, choose the right size and ask your veterinarian if your dog has dental concerns.",
  },
  {
    q: "How do I choose a size?",
    a: "Pick a chew larger than your dog can swallow whole. When in doubt, size up and supervise every chewing session.",
  },
  {
    q: "What should I do with the small leftover end?",
    a: "Remove it before it becomes a choking risk. Many pet parents soak the end and microwave it briefly to create a crunchy puff treat.",
  },
  {
    q: "Are they lactose free?",
    a: "The traditional aging process removes much of the lactose, making the chews low lactose, but dogs with known dairy sensitivities should start carefully.",
  },
  {
    q: "Do you work directly with farmers?",
    a: "Yes. The brand model centers small-batch sourcing, fair pricing, and long-term relationships with Himalayan farming communities.",
  },
];
