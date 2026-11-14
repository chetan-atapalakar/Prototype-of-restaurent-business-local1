export const restaurant = {
  name: "PINK PALACE",
  phone: "+91 91104 81266",
  phoneRaw: "919110481266",
  address: "Gokak Road, near TVS Showroom, Mudalagi, Karnataka, India",
  mapQuery: "Pink Palace restaurant, Gokak Road near TVS Showroom, Mudalagi, Karnataka, India",
};

export const hours = [
  { day: "Monday", open: "12:00", close: "23:00", label: "12:00 PM – 11:00 PM" },
  { day: "Tuesday", open: "12:30", close: "23:00", label: "12:30 PM – 11:00 PM" },
  { day: "Wednesday", open: "12:30", close: "23:00", label: "12:30 PM – 11:00 PM" },
  { day: "Thursday", open: "12:30", close: "23:00", label: "12:30 PM – 11:00 PM" },
  { day: "Friday", open: "12:30", close: "23:00", label: "12:30 PM – 11:00 PM" },
  { day: "Saturday", open: "12:30", close: "23:30", label: "12:30 PM – 11:30 PM" },
  { day: "Sunday", open: "12:00", close: "23:30", label: "12:00 PM – 11:30 PM" },
];

export const menuCategories = [
  { id: "soups", name: "Soups", description: "Warm beginnings" },
  { id: "starters", name: "Starters & Small Plates", description: "Something to share" },
  { id: "mains", name: "Main Course", description: "Comforting favourites" },
  { id: "rice", name: "Rice & Comfort Meals", description: "A familiar classic" },
  { id: "highlights", name: "Chef's Highlights", description: "Ask what’s special today" },
];

export const menuItems = [
  { id: "manchow", name: "Manchow Soup", category: "soups", note: "Contact us for today's menu and pricing.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85" },
  { id: "quick-bites", name: "Quick Bites", category: "starters", note: "Ask the restaurant for today's available options.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85" },
  { id: "small-plates", name: "Small Plates", category: "starters", note: "Contact us for today's menu and pricing.", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=85" },
  { id: "vegetarian", name: "Vegetarian Main Course", category: "mains", note: "Ask the restaurant for today's available options.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85" },
  { id: "jeera-rice", name: "Jeera Rice", category: "rice", note: "Contact us for today's menu and pricing.", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85" },
  { id: "comfort-meals", name: "Comforting Meals", category: "highlights", note: "Ask the restaurant for today's available options.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85" }
];

export const gallery = [
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=88", alt: "Vegetarian dining spread", shape: "tall" },
  { src: "https://images.unsplash.com/photo-1512621776951-a57141f2e6a2?auto=format&fit=crop&w=1200&q=88", alt: "Fresh vegetarian food", shape: "wide" },
  { src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=88", alt: "Indian vegetarian meal", shape: "square" },
  { src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=88", alt: "Soup served for a meal", shape: "square" },
  { src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=88", alt: "Rice dish", shape: "wide" }
];
