import React from 'react';

function Leadership() {
  return (
    <section id="leadership" className="py-4 scroll-mt-20">
      <div className="rounded-lg p-6 border">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Leadership
        </h2>

        <div className="space-y-4">
          {/* TEDx Experience */}
          <div className="p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Head of Logistics</h3>
                <p className="text-sm md:text-base">TEDx at USF</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm md:text-base">June 2024 – Feb 2025</p>
                <p className="text-xs md:text-sm">Tampa, Florida, United States</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>
                Ensured seamless execution of TEDx at USF by coordinating logistics and managing a team of 10+ volunteers, preparing them for the event
              </li>
              <li>
                Oversaw venue arrangements, including seating for 100 attendees, speaker accommodations, and security measures
              </li>
            </ul>
          </div>

          {/* Students of India Association */}
          <div className="p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Vice President</h3>
                <p className="text-sm md:text-base">Students of India Association at USF</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm md:text-base">Jan 2024 - May 2024</p>
                <p className="text-xs md:text-sm">Tampa, Florida, United States · On-site</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>
                Secured increased financial resources by implementing strategic financial management and fundraising initiatives, resulting in an expanded organizational budget
              </li>
              <li>
                Enhanced team performance and collaboration by leading and mentoring a team of 26 members, driving increased productivity and achieving organizational goals
              </li>
              <li>
                Ensured fair and transparent leadership transitions by chairing the Election Committee, upholding organizational integrity
              </li>
            </ul>
          </div>

          {/* SHPE Experience */}
          <div className="p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Database Director</h3>
                <p className="text-sm md:text-base">SHPE USF</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm md:text-base">Jan 2024 - May 2024</p>
                <p className="text-xs md:text-sm">Tampa, Florida, United States</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Improved data accessibility and organization by conducting a meticulous audit and creating a logical, intuitive folder hierarchy for years' worth of accumulated files
              </li>
              <li>
                Enhanced organizational efficiency and data retrieval by orchestrating a comprehensive overhaul of SHPE's document management system, streamlining access to critical organizational data and historical records
              </li>
              <li>
                Ensured consistent document identification and searchability by implementing a standardized file-naming convention and metadata tagging system across all organizational documents
              </li>
              <li>
                Optimized data storage and retrieval processes by designing and customizing database structures to meet the specific needs and requirements of SHPE
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
