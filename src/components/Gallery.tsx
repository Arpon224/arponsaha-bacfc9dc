import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import industrial experience images
import knittingMachine from '@/assets/gallery/industrial-knitting-machine.jpg';
import defectClassification from '@/assets/gallery/industrial-defect-classification.jpg';
import dyeingMachine from '@/assets/gallery/industrial-dyeing-machine.jpg';
import factoryFloor from '@/assets/gallery/industrial-factory-floor.jpg';

// Import university project images
import researchFramework from '@/assets/gallery/university-research-framework.png';
import measurementModel from '@/assets/gallery/university-measurement-model.png';
import hypothesisResults from '@/assets/gallery/university-hypothesis-results.png';

// Import club activity images
import languageMovement from '@/assets/gallery/club-language-movement.jpg';
import culturalEvent from '@/assets/gallery/club-cultural-event.jpg';
import literatureFest from '@/assets/gallery/club-literature-fest.jpg';
import outdoorEvent from '@/assets/gallery/club-outdoor-event.jpeg';
import culturalCelebration from '@/assets/gallery/club-cultural-celebration.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery organized by sections - easily customizable
  // To add more photos: import your images and add them to the appropriate section
  const gallerySections = {
    'Industrial Experience': [
      { name: 'Circular Knitting Machine', image: knittingMachine },
      { name: 'Defect Classification Board', image: defectClassification },
      { name: 'Industrial Dyeing Equipment', image: dyeingMachine },
      { name: 'Factory Production Floor', image: factoryFloor },
    ],
    'University Projects': [
      { name: 'Conceptual Research Framework', image: researchFramework },
      { name: 'Measurement Model Analysis', image: measurementModel },
      { name: 'Hypothesis Testing Results', image: hypothesisResults },
    ],
    'Club Activities': [
      { name: 'Language Movement Day', image: languageMovement },
      { name: 'Cultural Event Performance', image: culturalEvent },
      { name: 'BUTEX Literature Fest', image: literatureFest },
      { name: 'Outdoor Club Gathering', image: outdoorEvent },
      { name: 'Cultural Celebration', image: culturalCelebration },
    ],
    'Certifications': [
      // Add your certification photos here
      { name: 'Certificate 1', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop' },
    ],
    'Campus Life': [
      // Add your campus life photos here
      { name: 'Campus Event 1', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop' },
    ],
    'Art & Photography': [
      // Add your art and photography photos here
      { name: 'Artwork 1', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop' },
    ],
  };
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Photo <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual journey through my professional experiences, projects, and achievements
          </p>
        </div>

        <Tabs defaultValue="Industrial Experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 h-auto gap-2">
            {Object.keys(gallerySections).map((section) => (
              <TabsTrigger key={section} value={section} className="text-xs sm:text-sm">
                {section}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(gallerySections).map(([sectionName, photos]) => (
            <TabsContent key={sectionName} value={sectionName} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {photos.map((photo, index) => (
                  <Card
                    key={index}
                    className="group cursor-pointer overflow-hidden border-border hover:border-primary transition-all duration-300 animate-fade-in"
                    onClick={() => setSelectedImage(photo.image)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={photo.image}
                        alt={photo.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 bg-card">
                      <h3 className="text-sm font-semibold text-foreground text-center">
                        {photo.name}
                      </h3>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-2">
            <img src={selectedImage || ''} alt="Gallery preview" className="w-full h-auto" />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
export default Gallery;