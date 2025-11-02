import { Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Activities = () => {
  const activities = [
    {
      role: 'Former General Secretary',
      organization: 'BUTEX Literature Club',
      achievements: [
        'Successfully Organized Rabindra Sondhya',
        'Organized Lit Fest',
        'Organized Folk Fest and many other events',
      ],
    },
    {
      role: 'Former Co-Leader',
      organization: 'ARTEX (Art & Photography Club of BUTEX)',
      achievements: [
        'Successfully Organized Ovyarthonay Aloron',
        'Organized Nirobotay kolorob',
        'Organized Graffiti Competition',
      ],
    },
  ];

  const achievements = [
    'Best Artist at KPR Art Exhibition',
    'Runners up in Digital Art Segment at Intra-Departmental Fest',
    'Merit Scholarship in BUTEX',
    'SSC and JSC Board Scholarship',
    'Best Musical Instrument Player in College Annual Fest',
    'Completed a certified 2-month industrial internship at JK Knit Composite Ltd. (2025)',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Activities & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Activities */}
          <div className="animate-slide-in">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Users className="text-primary" size={32} />
              Leadership Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {activity.role}
                    </CardTitle>
                    <p className="text-muted-foreground">{activity.organization}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {activity.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-2">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="animate-slide-in">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="text-primary" size={32} />
              Key Achievements
            </h3>
            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">🏆</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
