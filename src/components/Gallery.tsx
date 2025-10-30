import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery photos organized by categories - easily customizable
  // To add your own photos: replace the image URLs with your own image paths
  const galleryCategories = [{
    title: 'Industrial Experience',
    description: 'Work experience at JK Knit Composite Ltd',
    image: '"C:\Users\Asus\Downloads\Compressed\portfolio\WhatsApp Image 2025-10-29 at 02.05.46_af6a4e99.jpg"auto=format&fit=crop'
  }, {
    title: 'Knitting Department',
    description: 'Knitting machines and fabric production',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea41f9cd?w=800&auto=format&fit=crop'
  }, {
    title: 'Dyeing & Finishing',
    description: 'Color processing and quality control',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&auto=format&fit=crop'
  }, {
    title: 'Quality Testing',
    description: 'Laboratory testing and analysis',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop'
  }, {
    title: 'University Projects',
    description: 'Academic projects and research work',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop'
  }, {
    title: 'Thesis Research',
    description: 'Sustainable textile dyeing research',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop'
  }, {
    title: 'Campus Life',
    description: 'University activities and events',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop'
  }, {
    title: 'Art & Photography',
    description: 'Creative works from ARTEX club',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop'
  }, {
    title: 'Cultural Programs',
    description: 'Event management and performances',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop'
  }, {
    title: 'Leadership Events',
    description: 'BUTEX Cultural Society activities',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop'
  }, {
    title: 'Team Collaboration',
    description: 'Group projects and teamwork',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop'
  }, {
    title: 'Workshops & Training',
    description: 'Professional development sessions',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop'
  }, {
    title: 'Textile Machinery',
    description: 'Industrial equipment and technology',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&auto=format&fit=crop'
  }, {
    title: 'Fabric Samples',
    description: 'Different textile materials and designs',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&auto=format&fit=crop'
  }, {
    title: 'Achievements',
    description: 'Awards and recognition',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop'
  }, {
    title: 'Certifications',
    description: 'Professional certificates and training',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop'
  }];
  return <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryCategories.map((category, index) => <Card key={index} className="group cursor-pointer overflow-hidden border-border hover:border-primary transition-all duration-300 animate-fade-in" onClick={() => setSelectedImage(category.image)}>
              <div className="relative aspect-video overflow-hidden">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 border-primary">
            {selectedImage}
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
export default Gallery;