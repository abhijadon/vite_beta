const formData = [
  {
    label: 'HES',
    name: ['customfields', 'institute_name'],
    value: 'HES',
    universities: [
      {
        // First university complete date 
        label: 'SGVU',
        name: ['customfields', 'university_name'],
        value: 'SGVU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'DPU',
        name: ['customfields', 'university_name'],
        value: 'DPU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'CU',
        name: ['customfields', 'university_name'],
        value: 'CU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'SPU',
        name: ['customfields', 'university_name'],
        value: 'SPU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'AMRITA',
        name: ['customfields', 'university_name'],
        value: 'AMRITA',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'AMITY',
        name: ['customfields', 'university_name'],
        value: 'AMITY',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'LPU',
        name: ['customfields', 'university_name'],
        value: 'LPU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'JAIN',
        name: ['customfields', 'university_name'],
        value: 'JAIN',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'SVSU',
        name: ['customfields', 'university_name'],
        value: 'SVSU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },

      {
        // First university complete date 
        label: 'VIGNAN',
        name: ['customfields', 'university_name'],
        value: 'VIGNAN',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'MANIPAL',
        name: ['customfields', 'university_name'],
        value: 'MANIPAL',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'SMU',
        name: ['customfields', 'university_name'],
        value: 'SMU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'HU',
        name: ['customfields', 'university_name'],
        value: 'HU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'BOSSE',
        name: ['customfields', 'university_name'],
        value: 'BOSSE',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },

      {
        // First university complete date 
        label: 'UU',
        name: ['customfields', 'university_name'],
        value: 'UU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'UPES',
        name: ['customfields', 'university_name'],
        value: 'UPES',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },

      {
        // First university complete date 
        label: 'MANGALAYATAN DISTANCE',
        name: ['customfields', 'university_name'],
        value: 'MANGALAYATAN DISTANCE',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'MANGALAYATAN ONLINE',
        name: ['customfields', 'university_name'],
        value: 'MANGALAYATAN ONLINE',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [
              { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
              { value: 'University Bank Account', label: 'University Bank Account' },
              { value: 'Cash/DD', label: 'Cash/DD' },
              { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
    ],
  },

  // SECOND INSTITUE 
  {
    label: 'DES',
    name: ['customfields', 'institute_name'],
    value: 'DES',
    universities: [
      {
        // First university complete date 
        label: 'SGVU',
        name: ['customfields', 'university_name'],
        value: 'SGVU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'DPU',
        name: ['customfields', 'university_name'],
        value: 'DPU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'CU',
        name: ['customfields', 'university_name'],
        value: 'CU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'SPU',
        name: ['customfields', 'university_name'],
        value: 'SPU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'AMRITA',
        name: ['customfields', 'university_name'],
        value: 'AMRITA',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'AMITY',
        name: ['customfields', 'university_name'],
        value: 'AMITY',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'LPU',
        name: ['customfields', 'university_name'],
        value: 'LPU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'JAIN',
        name: ['customfields', 'university_name'],
        value: 'JAIN',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'SVSU',
        name: ['customfields', 'university_name'],
        value: 'SVSU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },

      {
        // First university complete date 
        label: 'VIGNAN',
        name: ['customfields', 'university_name'],
        value: 'VIGNAN',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'MANIPAL',
        name: ['customfields', 'university_name'],
        value: 'MANIPAL',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'SMU',
        name: ['customfields', 'university_name'],
        value: 'SMU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'HU',
        name: ['customfields', 'university_name'],
        value: 'HU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'BOSSE',
        name: ['customfields', 'university_name'],
        value: 'BOSSE',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },

      {
        // First university complete date 
        label: 'UU',
        name: ['customfields', 'university_name'],
        value: 'UU',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'UPES',
        name: ['customfields', 'university_name'],
        value: 'UPES',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },

      {
        // First university complete date 
        label: 'MANGALAYATAN DISTANCE',
        name: ['customfields', 'university_name'],
        value: 'MANGALAYATAN DISTANCE',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
      {
        // First university complete date 
        label: 'MANGALAYATAN ONLINE',
        name: ['customfields', 'university_name'],
        value: 'MANGALAYATAN ONLINE',
        fields: [
          {
            courses: [
              {
                value: "10th",
                label: '10th'
              },
              {
                value: "12th",
                label: '12th'
              },
              {
                value: "DIPLOMA",
                label: "DIPLOMA",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BED",
                label: "BED",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BVOC",
                label: "BVOC",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "English", label: "English" },
                  { value: "Journlsim & Mass Communication", label: "Journlsim & Mass Communication" },
                  { value: "Economics", label: "Economics" },
                  { value: "History", label: "History" },
                  { value: "Political science", label: "Political science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: 'Geography', label: 'Geography' },
                ],
              },
              {
                value: "BBA",
                label: "BBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Education", label: "Education" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Human Resource Management", label: "Human Resource Management" },
                  { value: "Finance", label: "Finance" },
                  { value: "  Interntaional Business Management ", label: "  Interntaional Business Management " },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Engineering & Project Management", label: "Engineering & Project Management" },
                  { value: "IT & Systems Management", label: "IT & Systems Management" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Project Management & Operations", label: "Project Management & Operations" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                ],
              },
              {
                value: "BCA",
                label: "BCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Cloud and Security", label: "Cloud and Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                ],
              },
              {
                value: "BTECH",
                label: "BTECH",
                specializations: [
                  { value: "Mechanical", label: "Mechanical" },
                  { value: "Computer science", label: "Computer science" },
                  { value: "IT", label: "IT" },
                ],
              },
              {
                value: "BCOM",
                label: "BCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "Tax & Accounting", label: "Tax & Accounting" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)", label: "Corporate Accounting (Benchmarked to CA-Ind: Foundation, Intermediate and Final Syllabus)" },
                  { value: "International Finance & Accounting", label: "International Finance & Accounting" },
                ],
              },
              {
                value: "BSW",
                label: "BSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BLIS",
                label: "BLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "BSC",
                label: "BSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: 'Bio-Technology', label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Operation Theater Technology", label: "Operation Theater Technology" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },
              {
                value: "MA",
                label: "MA",
                specializations: [
                  { value: "Economics", label: "Economics" },
                  { value: "Buddhist Studies", label: "Buddhist Studies" },
                  { value: "Home Science", label: "Home Science" },
                  { value: "Public Administration", label: "Public Administration" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "English", label: "English" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Education", label: "Education" },
                  { value: "Journalism & Mass Communication", label: "Journalism & Mass Communication" }
                ],
              },
              {
                value: "MCA",
                label: "MCA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Computer Science & IT", label: "Computer Science & IT" },
                  { value: "Cyber Security", label: "Cyber Security" },
                  { value: "Data Analytics", label: "Data Analytics" },
                  { value: "Data Science ", label: "Data Science" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                ],
              },
              {
                value: "MCOM",
                label: "MCOM",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance & Systems", label: "Finance & Systems" },
                  { value: "Accounting & Finance", label: "Accounting & Finance" },
                  { value: "International Finance", label: "International Finance" },
                ],
              },
              {
                value: "MSW",
                label: "MSW",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
              {
                value: "MBA",
                label: "MBA",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Finance", label: "Finance" },
                  { value: "International Business", label: "International Business" },
                  { value: "Marketing Management", label: "Marketing Management" },
                  { value: "Operation and Production Management", label: "Operation and Production Management" },
                  { value: "Project Management", label: "Project Management" },
                  { value: "Hotel Management", label: "Hotel Management" },
                  { value: "Tourism & Hospitality Management", label: "Tourism & Hospitality Management" },
                  { value: "Supply Chain Management", label: "Supply Chain Management" },
                  { value: "Hospital Management", label: "Hospital Management" },
                  { value: "Financial Planning & Analysis", label: "Financial Planning & Analysis" },
                  { value: "Health Care Management", label: "Health Care Management" },
                  { value: "Business Analytics & Intelligence", label: "Business Analytics & Intelligence" },
                  { value: "Branding & Advertising ", label: "Branding & Advertising " },
                  { value: "Project Leadership Management", label: "Project Leadership Management" },
                  { value: "Banking Management", label: "Banking Management" },
                  { value: "E-commerce Marketing & Management", label: "E-commerce Marketing & Management" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Risk Management", label: "Risk Management" },
                  { value: "Business Leadership", label: "Business Leadership" },
                  { value: "Strategic Management", label: "Strategic Management" },
                  { value: "Enterpreneurship", label: "Enterpreneurship" },
                  { value: "Media & Entertainment Management", label: "Media & Entertainment Management" },
                  { value: "Foreign Trade & Global Business Management", label: "Foreign Trade & Global Business Management" },
                  { value: "Investment Banking & Wealth Management ", label: "Investment Banking & Wealth Management " },
                  { value: "Analytics & Data Science", label: "Analytics & Data Science" },
                  { value: "Operations Management", label: "Operations Management" },
                  { value: "Banking, Financial Services & Insurance", label: "Banking, Financial Services & Insurance" },
                  { value: "Retail Management", label: "Retail Management" },
                  { value: "IT & FinTech", label: "IT & FinTech" },
                  { value: "Business Analytics", label: "Business Analytics" },
                  { value: "General Management", label: "General Management" },
                  { value: "Systems & Operations Management", label: "Systems & Operations Management" },
                  { value: "Logistics & Supply Chain Management", label: "Logistics & Supply Chain Management" },
                  { value: "Finance & Marketing", label: "Finance & Marketing" },
                  { value: "Information Technology Management", label: "Information Technology Management" },
                  { value: "Marketing & Human Resource Management", label: "Marketing & Human Resource Management" },
                  { value: "Healthcare & Hospital Management ", label: "Healthcare & Hospital Management " },
                  { value: "Entrepreneurship & Leadership", label: "Entrepreneurship & Leadership" },
                  { value: "Human Resource Management & Finance", label: "Human Resource Management & Finance" },
                  { value: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)", label: "International Finance(Syllabus Integrated & Accredited by ACCA, UK)" },
                  { value: "Business Intelligence & Analytics(Accredited by IoA, UK)", label: "Business Intelligence & Analytics(Accredited by IoA, UK)" },
                  { value: "Human Resource", label: "Human Resource" },
                  { value: "Finance & Human Resource", label: "Finance & Human Resource" },
                  { value: "Digital Business", label: "Digital Business" },
                  { value: "Opreations", label: "Opreations" },
                  { value: "Infrastructure Management", label: "Infrastructure Management" },
                  { value: "Oil & Gas Management", label: "Oil & Gas Management" },
                  { value: "Power Management ", label: "Power Management " },
                  { value: "International Business Management", label: "International Business Management" },
                  { value: "Fintech Management", label: "Fintech Management" },
                  { value: "Artificial Intelligence & Machine Learning ", label: "Artificial Intelligence & Machine Learning " },
                  { value: "Logistics, Materials & Supply Chain Management", label: "Logistics, Materials & Supply Chain Management" },
                  { value: "Block Chain Management", label: "Block Chain Management" },
                  { value: "Agribusiness Management", label: "Agribusiness Management" },
                  { value: "Hospital Administration & Healthcare Management", label: "Hospital Administration & Healthcare Management" },
                ],
              },
              {
                value: "MSC",
                label: "MSC",
                specializations: [
                  { value: "General", label: "General" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Phycics", label: "Phycics" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Information Technology", label: "Information Technology" },
                  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Bio-Technology", label: "Bio-Technology" },
                  { value: "Zoology", label: "Zoology" },
                  { value: "IT", label: "IT" },
                  { value: "CS", label: "CS" },
                  { value: "Data science", label: "Data science" },
                  { value: "Animation & Multimedia", label: "Animation & Multimedia" },
                  { value: "Interior Designing", label: "Interior Designing" },
                  { value: "Fashion Technology", label: "Fashion Technology" },
                  { value: "Medical Laboratory Technology", label: "Medical Laboratory Technology" },
                  { value: "Optometry", label: "Optometry" },
                  { value: "Radiology & Imaging Technology", label: "Radiology & Imaging Technology" }
                ],
              },

              {
                value: "MLIS",
                label: "MLIS",
                specializations: [
                  { value: "General", label: "General" },
                ],
              },
            ]
          },
          {
            admission_type: [
              {
                value: "FRESH",
                label: "FRESH",
                payments: [
                  {
                    value: "Semester",
                    label: "Semester",
                    paymentType: [
                      {
                        key: "text",
                        label: "Semester fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Yearly",
                    label: "Yearly",
                    paymentType: [
                      {
                        key: "text",
                        label: "Yearly Fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  },
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "Credit Transfer",
                label: "Credit Transfer",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
              {
                value: "LATERAL ENTRY",
                label: "LATERAL ENTRY",
                payments: [
                  {
                    value: "Fullfees",
                    label: "Fullfees",
                    "paymentType": [
                      {
                        key: "text",
                        label: "Full fees",
                        name: ["customfields", "total_course_fee"],
                        place: "eg: 20000",
                        id: "Total Course Fee",
                        type: "text",
                        required: "require"
                      },
                      {
                        key: "text",
                        label: "Paid Amount",
                        name: ["customfields", "paid_amount"],
                        place: "eg: 20000",
                        id: "Paid Amount",
                        type: "text"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',

          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',

          },
          {
            key: 'email',
            label: 'Email-id',
            place: 'Enter Email-id',
            name: ['contact', 'email'],
            id: 'EmailID',
            type: 'email',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'phone',
            name: ['contact', 'phone'],
            place: 'Enter Phone Number',
            id: 'phone',
            type: 'tel',
            required: 'require'
          },
          {
            key: 'tel',
            label: 'Alternate number',
            name: ['contact', 'alternate_phone'],
            place: 'Enter Alternate Number',
            id: 'alternate',
            type: 'tel'
          },
          {
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',

          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',

          },

          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: JAN 20',
            id: 'Session',
            type: 'select',
            options: [{ value: 'JAN 20', label: 'JAN 20' },
            { value: 'JULY 20', label: 'JULY 20' },
            { value: 'JAN 21', label: 'JAN 21' },
            { value: 'JULY 21', label: 'JULY 21' },
            { value: 'JAN 22', label: 'JAN 22' },
            { value: 'JULY 22', label: 'JULY 22' },
            { value: 'JAN 23', label: 'JAN 23' },
            { value: 'JULY 23', label: 'JULY 23' },
            { value: 'JAN 24', label: 'JAN 24' },
            { value: 'JULY 24', label: 'JULY 24' },
            { value: 'JAN 25', label: 'JAN 25' },
            { value: 'JULY 25', label: 'JULY 25' },
            { value: 'MAR 23', label: 'MAR 23' },
            { value: 'MAR 25', label: 'MAR 25' },
            { value: 'APR 23', label: 'APR 23' },
            { value: 'OCT 23', label: 'OCT 23' },
            { value: 'OCT 24', label: 'OCT 24' },
            { value: 'NOV 23', label: 'NOV 23' },],

          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',

          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: [{ value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }],
          },

          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            place: 'Select Payment Mode',

            options: [{ value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
            { value: 'University Bank Account', label: 'University Bank Account' },
            { value: 'Cash/DD', label: 'Cash/DD' },
            { value: 'University Website', label: 'University Website' }],
          },

          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
          {
            key: 'file',
            label: 'Fee Reciept',
            name: 'feeDocument',
            id: 'feeDocument',
            type: 'file',
          },
          {
            key: 'file',
            label: 'Student document',
            name: 'studentDocument',
            id: 'studentDocument',
            type: 'file',
          },

        ],
      },
    ],
  },
];

export default formData;
