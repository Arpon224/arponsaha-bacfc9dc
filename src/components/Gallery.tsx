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
import paperHyacinth from '@/assets/gallery/university-paper-hyacinth.jpg';

// Import club activity images
import languageMovement from '@/assets/gallery/club-language-movement.jpg';
import culturalEvent from '@/assets/gallery/club-cultural-event.jpg';
import literatureFest from '@/assets/gallery/club-literature-fest.jpg';
import outdoorEvent from '@/assets/gallery/club-outdoor-event.jpeg';
import culturalCelebration from '@/assets/gallery/club-cultural-celebration.jpg';
import filmFestAward1 from '@/assets/gallery/club-film-fest-award-1.jpg';
import filmFestGroup from '@/assets/gallery/club-film-fest-group.jpg';
import filmFestAward2 from '@/assets/gallery/club-film-fest-award-2.jpg';
import filmScreening from '@/assets/gallery/club-film-screening.jpg';
import poetryCircle from '@/assets/gallery/club-poetry-circle.jpg';
import theatreGroup from '@/assets/gallery/club-theatre-group.jpg';

// Import art & photography images
import artPhoto4 from '@/assets/gallery/art-photo-4.jpg';
import artPhoto5 from '@/assets/gallery/art-photo-5.jpg';
import artSunset from '@/assets/gallery/art-sunset-photo.jpg';
import artIllustration from '@/assets/gallery/art-illustration.jpg';

// Import certification images
import certGraphics from '@/assets/gallery/cert-graphics-design.png';
import certHpDataScience from '@/assets/gallery/cert-hp-data-science.png';
import certHrProfessional from '@/assets/gallery/cert-hr-professional.png';
import certLeanManufacturing from '@/assets/gallery/cert-lean-manufacturing.png';
import certMicrosoftOffice from '@/assets/gallery/cert-microsoft-office.png';

// Import campus life images
import campusGroup from '@/assets/gallery/campus-group-photo.jpg';
import campusCulturalFrame from '@/assets/gallery/campus-cultural-frame.jpg';
import campusFormalGroup from '@/assets/gallery/campus-formal-group.jpg';
import campusMovieWall from '@/assets/gallery/campus-movie-wall.jpg';
import campusTraditional from '@/assets/gallery/campus-traditional-gathering.jpg';

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
      { name: 'Making paper from water hyacinth', image: paperHyacinth },
    ],
    'Club Activities': [
      { name: 'Language Movement Day', image: languageMovement },
      { name: 'Cultural Event Performance', image: culturalEvent },
      { name: 'BUTEX Literature Fest', image: literatureFest },
      { name: 'Outdoor Club Gathering', image: outdoorEvent },
      { name: 'Cultural Celebration', image: culturalCelebration },
      { name: 'Film Festival Award Ceremony', image: filmFestAward1 },
      { name: 'Film Festival Group Photo', image: filmFestGroup },
      { name: 'Film Festival Achievement', image: filmFestAward2 },
      { name: 'Film Screening Event', image: filmScreening },
      { name: 'Poetry Circle Discussion', image: poetryCircle },
      { name: 'Theatre Group Performance', image: theatreGroup },
    ],
    'Certifications': [
      { name: 'Graphics Design Certificate', image: certGraphics },
      { name: 'HP Data Science & Analytics', image: certHpDataScience },
      { name: 'Global HR Professional', image: certHrProfessional },
      { name: 'Lean Manufacturing (ITC)', image: certLeanManufacturing },
      { name: 'Microsoft Office Starter', image: certMicrosoftOffice },
    ],
    'Campus Life': [
      { name: 'Traditional Day Group Photo', image: campusGroup },
      { name: 'Cultural Photo Frame', image: campusCulturalFrame },
      { name: 'Formal Group Photo', image: campusFormalGroup },
      { name: 'Movie Wall Gathering', image: campusMovieWall },
      { name: 'Traditional Gathering', image: campusTraditional },
    ],
    'Art & Photography': [
      { name: 'Nature Photography', image: artPhoto4 },
      { name: 'Landscape Photography', image: artPhoto5 },
      { name: 'Golden Sunset Capture', image: artSunset },
      { name: 'Digital Illustration', image: artIllustration },
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