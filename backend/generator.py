print("UNIVERSAL AI WEBSITE GENERATOR ACTIVE")


def generate_website_json(user_prompt):
    prompt = user_prompt.lower()

    # Category Detection
    if any(word in prompt for word in ["restaurant", "food", "cafe", "hotel"]):
        category = "Restaurant"
        pages = ["Home", "Menu", "About", "Reservations", "Contact"]
        theme = "Luxury Restaurant Experience"
        color1, color2 = "#7C2D12", "#F59E0B"

    elif any(word in prompt for word in ["portfolio", "designer", "developer", "personal"]):
        category = "Portfolio"
        pages = ["Home", "About Me", "Projects", "Skills", "Contact"]
        theme = "Modern Personal Portfolio"
        color1, color2 = "#111827", "#3B82F6"

    elif any(word in prompt for word in ["hospital", "medical", "clinic", "health"]):
        category = "Healthcare"
        pages = ["Home", "Services", "Doctors", "Appointments", "Contact"]
        theme = "Professional Healthcare"
        color1, color2 = "#0F766E", "#14B8A6"

    elif any(word in prompt for word in ["real estate", "property", "construction"]):
        category = "Real Estate"
        pages = ["Home", "Properties", "About", "Agents", "Contact"]
        theme = "Premium Real Estate"
        color1, color2 = "#1E3A8A", "#F59E0B"

    elif any(word in prompt for word in ["fashion", "clothing", "brand", "boutique"]):
        category = "Fashion"
        pages = ["Home", "Collections", "About", "Shop", "Contact"]
        theme = "Luxury Fashion Brand"
        color1, color2 = "#BE185D", "#F472B6"

    elif any(word in prompt for word in ["education", "course", "school", "academy", "edtech"]):
        category = "Education"
        pages = ["Home", "Courses", "About", "Testimonials", "Contact"]
        theme = "Modern EdTech Platform"
        color1, color2 = "#4338CA", "#06B6D4"

    elif any(word in prompt for word in ["marketing", "agency", "digital"]):
        category = "Marketing Agency"
        pages = ["Home", "Services", "Portfolio", "About", "Contact"]
        theme = "Modern Marketing Agency"
        color1, color2 = "#4F46E5", "#06B6D4"

    elif any(word in prompt for word in ["tesla", "ev", "automobile", "car"]):
        category = "EV Automotive"
        pages = ["Home", "About", "Models", "Charging", "Contact"]
        theme = "Tesla Futuristic EV"
        color1, color2 = "#111111", "#E82127"

    else:
        category = "Startup SaaS"
        pages = ["Home", "Features", "Pricing", "Testimonials", "Contact"]
        theme = "Startup SaaS Premium"
        color1, color2 = "#7C3AED", "#2563EB"

    return {
        "websiteName": f"{category} Pro",
        "theme": theme,
        "pages": pages,
        "sections": [
            {
                "type": "hero",
                "heading": f"Welcome to {category} Pro",
                "subheading": f"The ultimate {category.lower()} website powered by AI",
                "cta": "Get Started"
            },
            {
                "type": "features",
                "heading": f"Why Choose {category} Pro?",
                "subheading": f"Built for innovation, growth, and premium {category.lower()} experiences",
                "cta": "Explore More"
            },
            {
                "type": "contact",
                "heading": "Let’s Build Your Vision",
                "subheading": "Transform your idea into reality",
                "cta": "Contact Us"
            }
        ],
        "styles": {
            "primaryColor": color1,
            "secondaryColor": color2,
            "font": "Poppins"
        }
    }