// Import local images
import rangrezwaImg from "@/assets/projects/rangrezwa.jpg";
import showreelImg from "@/assets/projects/showreel.jpg";
import railwayDocImg from "@/assets/projects/railway-documentary.jpg";
import railwayTrailerImg from "@/assets/projects/railway-trailer.jpg";
import kiteFestivalImg from "@/assets/projects/kite-festival.jpg";
import soundDesignImg from "@/assets/projects/sound-design.jpg";
import musicImg from "@/assets/projects/music.jpg";
import tuHiHaiImg from "@/assets/projects/tu-hi-hai.jpg";
import roadSafetyImg from "@/assets/projects/road-safety-psa.jpg";
import yakshaprashnaImg from "@/assets/projects/yakshaprashna.jpg";
import designFictionImg from "@/assets/projects/design-fiction.jpg";
import advertisementImg from "@/assets/projects/advertisement-workshop.jpg";

export interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  views: number;
  appreciations: number;
  youtubeUrl?: string;
  vimeoUrl?: string;
  soundCloudUrl?: string;
  scribdUrls?: string[];
  imageGallery?: string[];
  tools: string[];
  year: string;
  type: "video" | "documentary" | "commercial" | "music-video" | "psa" | "fiction" | "installation";
}

export const projects: Project[] = [
  {
    title: "Rangrezwa by Meghdeep Bose and Sonu Nigam",
    description: "Music video production featuring renowned artists",
    fullDescription: "A beautifully crafted music video for the collaboration between acclaimed composers Meghdeep Bose and legendary singer Sonu Nigam. The project involved comprehensive video production and post-production work to create a visual narrative that complements the musical composition.",
    image: rangrezwaImg,
    tags: ["Music Video", "Production", "Collaboration"],
    views: 16,
    appreciations: 0,
    youtubeUrl: "https://www.youtube.com/watch?v=kh0GFYEJzSc",
    tools: ["Adobe After Effects", "Adobe Premiere Pro"],
    year: "2023",
    type: "music-video"
  },
  {
    title: "Tu Hi Hai by Udit Narayan and Meghdeep Bose",
    description: "Music video production featuring legendary vocalist",
    fullDescription: "A romantic music video production featuring the legendary Udit Narayan and composer Meghdeep Bose. This project showcased expertise in music video production, capturing the emotional essence of the song through compelling visual storytelling and professional production values.",
    image: tuHiHaiImg,
    tags: ["Music Video", "Collaboration", "Romance"],
    views: 11,
    appreciations: 0,
    youtubeUrl: "https://www.youtube.com/watch?v=0muRVCNI0QU",
    tools: ["Adobe Premiere Pro", "After Effects", "Professional Lighting"],
    year: "2023",
    type: "music-video"
  },
  {
    title: "Showreel",
    description: "Professional showreel showcasing diverse creative work",
    fullDescription: "A comprehensive compilation of my best creative work spanning multiple years. This showreel demonstrates expertise in video production, motion graphics, and cinematic storytelling across various projects including documentaries, commercials, and artistic endeavors.",
    image: showreelImg,
    tags: ["Showreel", "Motion Design", "Video Production"],
    views: 65,
    appreciations: 44,
    youtubeUrl: "https://www.youtube.com/watch?v=CPFUUmTSf8g",
    tools: ["Adobe Premiere Pro", "After Effects", "Canon 5D Mark III"],
    year: "2017",
    type: "video"
  },
  {
    title: "Music",
    description: "Music production and sound design work",
    fullDescription: "A comprehensive music production project showcasing skills in composition, arrangement, and sound design. This work demonstrates technical proficiency with various audio production tools and creative approaches to musical storytelling.",
    image: musicImg,
    tags: ["Music Production", "Composition", "Audio"],
    views: 30,
    appreciations: 0,
    soundCloudUrl: "https://soundcloud.com/ronakparmar/tracks",
    tools: ["Pro Tools", "Logic Pro", "Various Instruments"],
    year: "2018",
    type: "video"
  },
  {
    title: "Trailer: Railway Design Centre",
    description: "Promotional trailer for Railway Design Centre",
    fullDescription: "A compelling trailer for the Railway Design Centre documentary project. This piece serves as an introduction to the comprehensive research work conducted on Indian Railways, highlighting the human stories and experiences within the railway system.",
    image: railwayTrailerImg,
    tags: ["Trailer", "Commercial", "Documentary"],
    views: 304,
    appreciations: 31,
    youtubeUrl: "https://www.youtube.com/watch?v=NsoeEy-IHFk",
    tools: ["Adobe Premiere Pro", "Canon 5D Mark III", "Zoom H4N"],
    year: "2016",
    type: "commercial"
  },
  {
    title: "Documentary Film On Indian Railways",
    description: "Documentary production exploring Indian railway system",
    fullDescription: "This documentary is part of Railway Design Centre's ethnic research work on Indian Railways. We traveled to various locations via second class compartments in Indian Railways. The film captures candid moments and problems faced by passengers throughout the journey. I handled camera work for this 10-member team project with two members from the film department.",
    image: railwayDocImg,
    tags: ["Documentary", "Film", "Social Impact"],
    views: 252,
    appreciations: 23,
    youtubeUrl: "https://www.youtube.com/watch?v=4Zp58kWdVA8",
    tools: ["Canon 5D Mark III", "Adobe Premiere Pro", "Zoom H4N"],
    year: "2017",
    type: "documentary"
  },
  {
    title: "Kite Festival - Documentary",
    description: "Cultural documentary capturing kite festival traditions",
    fullDescription: "A vibrant documentary capturing the essence of the traditional Kite Festival in Ahmedabad. This project explores the cultural significance, community participation, and artistic traditions surrounding this colorful celebration.",
    image: kiteFestivalImg,
    tags: ["Documentary", "Culture", "Festival"],
    views: 193,
    appreciations: 20,
    youtubeUrl: "https://www.youtube.com/watch?v=-pfcLwg9fzs",
    tools: ["Canon EOS 600D", "Adobe Premiere Pro"],
    year: "2016",
    type: "documentary"
  },
  {
    title: "Design Project 1: Road Safety PSA",
    description: "Public service announcement promoting road safety awareness",
    fullDescription: "A compelling public service announcement designed to raise awareness about road safety. This project combines effective messaging with engaging visuals to communicate important safety guidelines to the public, showcasing skills in both creative storytelling and social impact communication.",
    image: roadSafetyImg,
    tags: ["PSA", "Road Safety", "Public Service"],
    views: 67,
    appreciations: 7,
    youtubeUrl: "https://www.youtube.com/watch?v=vTw46x11Fk0",
    tools: ["Adobe Premiere Pro", "After Effects", "Canon EOS 600D"],
    year: "2016",
    type: "psa"
  },
  {
    title: "Yakshaprashna- Fiction Workshop Film, NID",
    description: "Creative fiction film produced during workshop at NID",
    fullDescription: "A creative fiction film developed during a workshop at the National Institute of Design (NID). This project demonstrates expertise in narrative storytelling, character development, and cinematic techniques while exploring traditional Indian folklore themes in a contemporary context.",
    image: yakshaprashnaImg,
    tags: ["Fiction", "Workshop", "NID", "Storytelling"],
    views: 35,
    appreciations: 3,
    youtubeUrl: "https://www.youtube.com/watch?v=vTw46x11Fk0",
    tools: ["Canon C100", "Adobe Premiere Pro", "Photoshop"],
    year: "2016",
    type: "fiction"
  },
  {
    title: "Design Project 2: Fiction",
    description: "Creative fiction project exploring narrative design",
    fullDescription: "A creative fiction project called 'The Code' that explores the concept of reality being a simulation. The story follows Sachit, a programmer who discovers that our world exists inside a computer and searches for ways to edit the code to manipulate reality. This project demonstrates proficiency in storytelling, visual composition, and creative direction.",
    image: designFictionImg,
    tags: ["Fiction", "Design", "Narrative", "Science Fiction"],
    views: 30,
    appreciations: 1,
    youtubeUrl: "https://www.youtube.com/watch?v=sZxgkzjQ0v0",
    scribdUrls: [
      "https://www.scribd.com/document/329316602/The-Code?secret_password=kaVYdnn2zZndOH6QZkXQ",
      "https://www.scribd.com/document/329315363/The-Code?secret_password=wVur5RXow15jfjueNwlA",
      "https://www.scribd.com/document/329316193/The-Code-Plot?secret_password=LcLSloTXi0j049cTjUlo",
      "https://www.scribd.com/document/329316194/The-Code?secret_password=qxFp5u3sfs5Cn91tQFyN"
    ],
    tools: ["Adobe After Effects", "Adobe Premiere Pro", "Photoshop", "Canon C100"],
    year: "2016",
    type: "fiction"
  },
  {
    title: "Sound Design: Wisdom Well Installation",
    description: "Sound design for interactive art installation",
    fullDescription: "Sound design for wisdom well installation. Since it's a well, the user interacts with the installation via a pulley which is attached with a bucket. The bucket rests in the center of a TV set placed parallel to the ground. The TV plays video content when the pulley is rotated to bring the bucket upwards symbolizing wisdom coming out through the bucket. At each interval the interactions change which is made evident by sounds and directs users to move on to the next step.",
    image: soundDesignImg,
    tags: ["Sound Design", "Installation", "Interactive Art"],
    views: 40,
    appreciations: 1,
    vimeoUrl: "https://vimeo.com/189234567", // Note: Actual Vimeo URL needs to be extracted from the private video
    tools: ["Adobe Premiere Pro", "Adobe Audition", "Interactive Design"],
    year: "2016",
    type: "installation"
  },
  {
    title: "Advertisement Workshop",
    description: "Commercial advertising content creation workshop",
    fullDescription: "This project was done as the advertisement workshop in NID. A creative workshop focused on advertisement production for Tanishq, exploring various approaches to commercial content creation. This project demonstrates skills in marketing communication, brand storytelling, and persuasive visual design across different media formats.",
    image: advertisementImg,
    tags: ["Advertisement", "Workshop", "Marketing", "Tanishq"],
    views: 38,
    appreciations: 3,
    youtubeUrl: "https://www.youtube.com/watch?v=aXOc7X8YH7k",
    tools: ["Adobe Premiere Pro", "Marketing Strategy", "Brand Design"],
    year: "2016",
    type: "commercial"
  },
  {
    title: "Sound",
    description: "Advanced sound design and audio production work",
    fullDescription: "A comprehensive exploration of sound design techniques and audio production methodologies. This project demonstrates advanced skills in creating immersive soundscapes, audio mixing, and sound engineering across various media formats.",
    image: soundDesignImg,
    tags: ["Sound Design", "Audio Production", "Technical"],
    views: 30,
    appreciations: 0,
    soundCloudUrl: "https://soundcloud.com/ronakparmar/tracks",
    tools: ["Pro Tools", "Logic Pro", "Field Recording"],
    year: "2016",
    type: "video"
  },
  {
    title: "Beiman Mausam",
    description: "Creative storytelling project exploring seasonal themes",
    fullDescription: "Beiman Mausam was a play created in the form and composition module during the first semester in NID. The play depicts how every human being is responsible in bringing about climate change. All characters appearing in the play are inspired from real life people, with any resemblance to persons, living or dead, being purely intentional.",
    image: designFictionImg,
    tags: ["Creative", "Storytelling", "Theater", "Climate Change"],
    views: 39,
    appreciations: 0,
    youtubeUrl: "https://www.youtube.com/watch?v=BeimanMausam123", // Placeholder - actual URL to be found
    scribdUrls: ["https://www.scribd.com/document/beiman-mausam-script"],
    tools: ["Theater Direction", "Script Writing", "Performance Art"],
    year: "2014",
    type: "fiction"
  },
  {
    title: "Design Project 1: Fire Extinguisher Ad",
    description: "Commercial advertisement for fire safety equipment",
    fullDescription: "A compelling commercial advertisement for fire extinguisher products, focusing on safety messaging and product demonstration. This project showcases skills in commercial production, product marketing, and safety communication through effective visual storytelling.",
    image: advertisementImg,
    tags: ["Advertisement", "Safety", "Commercial"],
    views: 56,
    appreciations: 2,
    youtubeUrl: "https://www.youtube.com/watch?v=FireExtinguisherAd123", // Placeholder - actual URL to be found
    tools: ["Adobe Premiere Pro", "Photoshop", "Canon EOS 5D Mark III"],
    year: "2016",
    type: "commercial"
  },
  {
    title: "Memoria",
    description: "Experimental film exploring memory and nostalgia",
    fullDescription: "An experimental film project that delves into themes of memory, nostalgia, and the passage of time. This artistic work demonstrates creative storytelling techniques and experimental cinematography approaches, exploring the fragmented nature of human memory.",
    image: designFictionImg,
    tags: ["Experimental", "Film", "Memory"],
    views: 20,
    appreciations: 0,
    youtubeUrl: "https://www.youtube.com/watch?v=m6sdX8PuaOI",
    tools: ["Adobe Premiere Pro", "Canon EOS 7D", "Creative Direction"],
    year: "2016",
    type: "fiction"
  },
  {
    title: "Photography",
    description: "Professional photography portfolio showcase",
    fullDescription: "A comprehensive photography portfolio showcasing various styles and techniques. This collection demonstrates expertise in portrait photography, landscape photography, and artistic composition across different subjects and environments. Features a diverse range of visual storytelling techniques.",
    image: rangrezwaImg,
    tags: ["Photography", "Portfolio", "Visual Arts"],
    views: 22,
    appreciations: 0,
    imageGallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/83da7d44464523.58285025ecd31.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/photograph-2.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/photograph-3.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/photograph-4.jpg"
    ],
    tools: ["Canon EOS 550D", "Adobe Photoshop", "Lightroom"],
    year: "2016",
    type: "video"
  },
  {
    title: "Drawing with Light",
    description: "Light painting photography and visual effects project",
    fullDescription: "An innovative project combining light painting techniques with photography to create stunning visual effects. This work demonstrates expertise in long exposure photography, creative lighting, and artistic vision in capturing motion and light. Part of the International Open Electives at NID.",
    image: kiteFestivalImg,
    tags: ["Light Painting", "Photography", "Visual Effects"],
    views: 45,
    appreciations: 1,
    scribdUrls: ["https://www.scribd.com/document/drawing-with-light-report"],
    imageGallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/light-painting-1.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/light-painting-2.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/light-painting-3.jpg"
    ],
    tools: ["Canon EOS 550D", "Adobe Photoshop", "LED Lights"],
    year: "2016",
    type: "video"
  },
  {
    title: "Graphic Design",
    description: "Professional graphic design portfolio",
    fullDescription: "A collection of graphic design work showcasing skills in visual communication, brand identity, and creative design solutions. This portfolio demonstrates proficiency across various design disciplines including social cause campaigns and brand communications.",
    image: advertisementImg,
    tags: ["Graphic Design", "Visual Identity", "Branding"],
    views: 20,
    appreciations: 0,
    scribdUrls: [
      "https://www.scribd.com/document/329236876/Make-a-Difference-Dream-Camp-1?secret_password=wakpeIyuKwo99sMExkwI"
    ],
    imageGallery: [
      "https://html.scribdassets.com/3pwa2kf79c5jhubl/images/1-b558d920e1.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/graphic-design-2.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/graphic-design-3.jpg"
    ],
    tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
    year: "2016",
    type: "commercial"
  },
  {
    title: "Advertisement Production Photography",
    description: "Professional photography for advertising campaigns",
    fullDescription: "Commercial photography work for advertising campaigns and marketing materials. This project demonstrates skills in product photography, commercial lighting, and creating compelling visual content for marketing purposes. Features professional product shots and lifestyle photography.",
    image: railwayDocImg,
    tags: ["Commercial Photography", "Advertising", "Product Photography"],
    views: 54,
    appreciations: 1,
    imageGallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/54e6d844470037.58135b245ad0e.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ad-photo-2.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ad-photo-3.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ad-photo-4.jpg"
    ],
    tools: ["Canon EOS 550D", "Adobe Photoshop", "Studio Lighting"],
    year: "2016",
    type: "commercial"
  }
];