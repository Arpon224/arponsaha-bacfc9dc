import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      institution: 'Bangladesh University of Textiles',
      degree: 'BSc in Textile Engineering',
      specialization: 'Specialized in Textile Engineering Management (TEM)',
      duration: '2020-2025',
      grade: 'CGPA: 3.37/4.00',
    },
    {
      institution: 'Gaibandha Govt College',
      degree: 'Higher Secondary Certificate',
      duration: '2018-2019',
      grade: 'GPA: 5.00/5.00',
    },
    {
      institution: 'Gaibandha Govt College',
      degree: 'Secondary School Certificate',
      duration: '2016-2017',
      grade: 'GPA: 5.00/5.00',
    },
  ];

  const certifications = [
    'Advanced Lean Manufacturing in the T&C sector - ITC SME Trade Academy 2025',
    'Global Human Resources Professional - Udemy 2025',
    'Data Science and Analytics - HP Life 2025',
    'Basic Graphics Design - Muktopaath 2021',
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Education */}
          <div className="animate-slide-in">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" size={32} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border hover:border-primary transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl text-primary">
                      {edu.institution}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-foreground font-semibold">{edu.degree}</p>
                      {edu.specialization && (
                        <p className="text-muted-foreground text-sm">{edu.specialization}</p>
                      )}
                      <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                        <span>{edu.duration}</span>
                        <span className="text-primary font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-in">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-primary" size={32} />
              Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/30 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Award className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
