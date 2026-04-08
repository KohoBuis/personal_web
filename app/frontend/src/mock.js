export const mockData = {
  personal: {
    firstName: "Prénom",
    lastName: "Nom",
    title: "Ingénieur Électronique & Systèmes Embarqués",
    school: "ESME Sudria",
    location: "France",
    phone: "Téléphone",
    email: "Email",
    tagline: "Innovation • Systèmes Embarqués • Technologies du Futur"
  },
  
  about: {
    story: "Passionné par l'innovation technologique et les systèmes embarqués, je transforme des idées complexes en solutions concrètes. Diplômé de l'ESME Sudria, j'ai développé une expertise solide en électronique embarquée, IoT et développement mobile.",
    mission: "Mon objectif : concevoir des systèmes intelligents qui repoussent les limites du possible. Que ce soit un drone anti-incendie ou un système pour brigade cynophile, j'aime relever des défis techniques ambitieux.",
    personality: "Créatif, rigoureux et toujours en quête de dépassement - des qualités que je cultive autant dans mes projets techniques que dans mes passions pour les sports extrêmes et la mécanique."
  },
  
  projects: [
    {
      id: 1,
      title: "Module Embarqué Drone Incendie",
      description: "Système embarqué autonome pour drone de lutte contre les incendies avec capteurs thermiques et transmission temps réel.",
      technologies: ["ESP32", "C/C++", "Capteurs Thermiques", "LoRa"],
      category: "IoT & Embedded",
      status: "Terminé",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Système Brigade Cynophile",
      description: "Module de suivi et communication pour chiens de brigade avec localisation GPS et monitoring physiologique.",
      technologies: ["ESP32", "GPS", "BLE", "Python"],
      category: "IoT & Embedded",
      status: "Terminé",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "App Mobile Flutter + Stabilisation Vidéo",
      description: "Application mobile avec flux vidéo en temps réel et stabilisation d'image utilisant OpenCV.",
      technologies: ["Flutter", "OpenCV", "Python", "FFmpeg"],
      category: "Mobile & Vision",
      status: "Terminé",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Transmission LoRa + Bluetooth",
      description: "Système de transmission longue portée combinant LoRa et BLE pour communication bidirectionnelle.",
      technologies: ["LoRa", "BLE", "ESP32", "C++"],
      category: "Communication",
      status: "Terminé",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Système RFID avec ESP32",
      description: "Solution de contrôle d'accès et identification par RFID avec interface web de gestion.",
      technologies: ["ESP32", "RFID", "Web Server", "C++"],
      category: "IoT & Security",
      status: "Terminé",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Calibration Capteurs Gaz",
      description: "Système de calibration et monitoring pour capteurs de gaz MQ-6 et H2S avec alertes en temps réel.",
      technologies: ["Arduino", "Capteurs MQ-6", "H2S", "Python"],
      category: "Sensors & Safety",
      status: "Terminé",
      image: "/api/placeholder/600/400"
    }
  ],
  
  skills: [
    { name: "C / C++", level: 90, category: "Programmation" },
    { name: "Python", level: 85, category: "Programmation" },
    { name: "Embedded Systems", level: 95, category: "Hardware" },
    { name: "ESP32 / Arduino", level: 90, category: "Hardware" },
    { name: "Flutter / Mobile", level: 80, category: "Mobile" },
    { name: "OpenCV", level: 75, category: "Vision" },
    { name: "IoT / LoRa / BLE", level: 85, category: "Communication" },
    { name: "AUTOSAR", level: 70, category: "Automotive" }
  ],
  
  passions: [
    {
      title: "Street Workout",
      icon: "dumbbell",
      description: "Discipline et dépassement de soi"
    },
    {
      title: "Sports de Combat",
      icon: "shield",
      description: "Stratégie et résilience"
    },
    {
      title: "Sports Extrêmes",
      icon: "plane",
      description: "Parachutisme, parapente, surf, kitesurf"
    },
    {
      title: "Mécanique Auto",
      icon: "car",
      description: "Passion pour la technique et la performance"
    }
  ],
  
  values: [
    { title: "Rigueur", description: "Précision technique et attention aux détails" },
    { title: "Autonomie", description: "Capacité à mener des projets de A à Z" },
    { title: "Dépassement", description: "Toujours repousser ses limites" }
  ],
  
  stats: [
    { label: "Projets Réalisés", value: 15 },
    { label: "Technologies Maîtrisées", value: 12 },
    { label: "Heures de Code", value: 5000 }
  ]
};