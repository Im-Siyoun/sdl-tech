export function ProfileBlock() {
  const education = [
    { degree: 'EMBA', institution: 'Sungkyunkwan University' },
    { degree: 'Business Administration', institution: 'Hanyang University' },
    {
      degree: 'International Studies Program',
      institution: 'Georgetown University',
    },
    { degree: 'Global Program', institution: 'University of Leeds' },
  ];

  return (
    <div className="flex flex-col gap-8 max-w-md">
      {/* Education */}
      <div className="space-y-4">
        <h3 className="text-accent text-xs md:text-sm font-semibold flex items-center gap-2">
          <span className="w-4 h-0.5 bg-accent" />
          Education
        </h3>
        <div className="space-y-3 pl-6">
          {education.map((item, index) => (
            <div key={index} className="relative pl-4 border-l border-white/20">
              <div className="absolute -left-[3px] top-1.5 w-1.5 h-1.5 bg-accent rounded-full" />
              <p className="text-white text-xs sm:text-sm md:text-base font-medium">
                {item.degree}
              </p>
              <p className="text-white/60 text-[10px] sm:text-xs md:text-sm">
                {item.institution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Experience */}
      <div className="space-y-4">
        <h3 className="text-accent text-xs md:text-sm font-semibold flex items-center gap-2">
          <span className="w-4 h-0.5 bg-accent" />
          Professional Experience
        </h3>
        <div className="pl-6">
          <div className="relative pl-4 border-l border-white/20">
            <div className="absolute -left-[3px] top-1.5 w-1.5 h-1.5 bg-accent rounded-full" />
            <p className="text-white text-xs sm:text-sm md:text-base font-medium">
              Founder
            </p>
            <p className="text-white/60 text-[10px] sm:text-xs md:text-sm">
              SDL Tech Group
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
