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
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload student document',
            name: 'upload_student_document',
            place: 'Upload student document',
            id: 'upload_student_document',
            type: 'file',
            required: 'require'

          },
          {
            key: 'file',
            label: 'Upload fee receipt',
            name: 'upload_fee_receipt_screenshot',
            place: 'Upload fee receipt',
            id: 'Uplaod Student Document',
            type: 'file',
            required: 'require'
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter your remark',
            id: 'remark',
            type: 'textarea',
          },
        ],
      },
      {
        // Seconde university complete date 
        label: 'CU',
        name: ['customfields', 'university_name'],
        value: 'CU',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'file',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Uplaod Student Document',
            id: 'Uplaod Student Document',
            type: 'file',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Remark',
            id: 'Remark',
            type: 'textarea',
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
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: ['customfields', 'upload_fee_receipt_screenshot'],
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'file',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Uplaod Student Document',
            id: 'Uplaod Student Document',
            type: 'file',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Remark',
            id: 'remark',
            type: 'textarea',
          },
        ],
      },
      {
        // Fpurth university complete date 
        label: 'LPU',
        name: ['customfields', 'university_name'],
        value: 'LPU',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: ['customfields', 'upload_fee_receipt_screenshot'],
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'file',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Uplaod Student Document',
            id: 'Uplaod Student Document',
            type: 'file',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Remark',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // Fifth university complete date 
        label: 'JAIN',
        name: ['customfields', 'university_name'],
        value: 'JAIN',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // Sixth university complete date 
        label: 'SVSU',
        name: ['customfields', 'university_name'],
        value: 'SVSU',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'date',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // Seventh university complete date 
        label: 'NMIMS',
        name: ['customfields', 'university_name'],
        value: 'NMIMS',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 8th university complete date 
        label: 'VIGNAN',
        name: ['customfields', 'university_name'],
        value: 'VIGNAN',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 9th university complete date 
        label: 'HINDUSTAN',
        name: ['customfields', 'university_name'],
        value: 'HINDUSTAN',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'text',
            label: 'Specialization',
            name: ['customfields', 'enter_specialization'],
            place: 'Enter Specialization',
            id: 'Specialization',
            type: 'text',
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 9th university complete date 
        label: 'MANIPAL',
        name: ['customfields', 'university_name'],
        value: 'MANIPAL',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 10 university complete date 
        label: 'SMU',
        name: ['customfields', 'university_name'],
        value: 'SMU',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 11th university complete date 
        label: 'HU',
        name: ['customfields', 'university_name'],
        value: 'HU',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 12th university complete date 
        label: 'BOSSE',
        name: ['customfields', 'university_name'],
        value: 'BOSSE',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 13th university complete date 
        label: 'SABARMATI',
        name: ['customfields', 'university_name'],
        value: 'SABARMATI',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 14th university complete date 
        label: 'UU',
        name: ['customfields', 'university_name'],
        value: 'UU',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 15th university complete date 
        label: 'UPES',
        name: ['customfields', 'university_name'],
        value: 'UPES',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 15th university complete date 
        label: 'MRU',
        name: ['customfields', 'university_name'],
        value: 'MRU',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // First university complete date 
        label: 'MANGALAYATAN',
        name: ['customfields', 'university_name'],
        value: 'MANGALAYATAN',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
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
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
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
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // Seconde university complete date 
        label: 'CU',
        name: ['customfields', 'university_name'],
        value: 'CU',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
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
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'file',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'file',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // Fpurth university complete date 
        label: 'LPU',
        name: ['customfields', 'university_name'],
        value: 'LPU',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // Fifth university complete date 
        label: 'JAIN',
        name: ['customfields', 'university_name'],
        value: 'JAIN',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // Sixth university complete date 
        label: 'SVSU',
        name: ['customfields', 'university_name'],
        value: 'SVSU',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // Seventh university complete date 
        label: 'NMIMS',
        name: ['customfields', 'university_name'],
        value: 'NMIMS',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 8th university complete date 
        label: 'VIGNAN',
        name: ['customfields', 'university_name'],
        value: 'VIGNAN',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 9th university complete date 
        label: 'HINDUSTAN',
        name: ['customfields', 'university_name'],
        value: 'HINDUSTAN',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'text',
            label: 'Specialization',
            name: ['customfields', 'enter_specialization'],
            place: 'Enter Specialization',
            id: 'Specialization',
            type: 'text',
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 9th university complete date 
        label: 'MANIPAL',
        name: ['customfields', 'university_name'],
        value: 'MANIPAL',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 10 university complete date 
        label: 'SMU',
        name: ['customfields', 'university_name'],
        value: 'SMU',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 11th university complete date 
        label: 'HU',
        name: ['customfields', 'university_name'],
        value: 'HU',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 12th university complete date 
        label: 'BOSSE',
        name: ['customfields', 'university_name'],
        value: 'BOSSE',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 13th university complete date 
        label: 'SABARMATI',
        name: ['customfields', 'university_name'],
        value: 'SABARMATI',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 14th university complete date 
        label: 'UU',
        name: ['customfields', 'university_name'],
        value: 'UU',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 15th university complete date 
        label: 'UPES',
        name: ['customfields', 'university_name'],
        value: 'UPES',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // 15th university complete date 
        label: 'MRU',
        name: ['customfields', 'university_name'],
        value: 'MRU',
        fields: [
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },

          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
      {
        // First university complete date 
        label: 'MANGALAYATAN',
        name: ['customfields', 'university_name'],
        value: 'MANGALAYATAN',
        fields: [
          {
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
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
            key: 'radio',
            label: 'Want to send Fee Receipt',
            id: 'Send',
            name: ['customfields', 'send_fee_receipt'],
            type: 'radio',
            options: ['yes', 'no'],
            required: 'require'
          },
          {
            key: 'studentId',
            name: 'lead_id',
            label: 'StudentID',
            place: 'StudentID',
            id: 'StudentID',
            type: 'studentId',
            required: 'require'
          },
          {
            key: 'text',
            name: 'full_name',
            label: 'Student Name',
            place: 'Student Name',
            id: 'full_name',
            type: 'text',
            required: 'require'
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
            key: 'text',
            label: 'Father Name',
            name: ['customfields', 'father_name'],
            place: 'Enter Father Name',
            id: 'Father Name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'text',
            label: 'Mother Name',
            name: ['customfields', 'mother_name'],
            place: 'Enter Mother Name',
            id: 'mother_name',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Session',
            name: ['customfields', 'session'],
            place: 'eg: jan 20-jan 23',
            id: 'Session',
            type: 'select',
            options: ['jan 20-jan 20', 'july 20-july 20', 'jan 21-jan 21', 'july 21-july 21', 'jan 22-jan 22', 'july 22-july 22', 'jan 23-jan 23', 'july 23-july 23', 'jan 24-jan 24', 'july 24-july 24', 'jan 25-jan 25', 'july 25-july 25'],
            required: 'require'
          },
          {
            key: 'select',
            label: 'Admission Type',
            name: ['customfields', 'admission_type'],
            id: 'SessionType',
            place: 'Enter Admission Type',
            type: 'select',
            options: ['Fresher', 'LATERAL ENTRY',],
          },
          {
            courses: [
              {
                value: "BA",
                label: "BA",
                specializations: [
                  { "value": "Education", "label": "Education" },
                  { "value": "English", "label": "English" },
                  { "value": "Economics", "label": "Economics" },
                  { "value": "History", "label": "History" },
                  { "value": "Political science", "label": "Political science" },
                  { "value": "Sociology", "label": "Sociology" },
                  { "value": "Journalism and Mass Communication", "label": "Journalism and Mass Communication" },
                ],

              },

            ]
          },
          {
            key: 'date',
            label: 'Date of Birth',
            name: ['customfields', 'dob'],
            place: 'Enter Date of Birth',
            id: 'dob',
            type: 'text',
            required: 'require'
          },
          {
            key: 'select',
            label: 'Gender',
            name: ['customfields', 'gender'],
            id: 'Gender',
            place: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
          },
          {
            key: 'select',
            label: 'Installment Type',
            id: 'InstallmentType',
            name: ['customfields', 'installment_type'],
            place: 'Installment Type',
            type: 'select',
            required: 'require',
            options: [
              '1st Installment/ New Admission',
              '2nd Installment',
              '3rd Installment',
              '4th Installment',
              '5th Installment',
              '6th Installment',
              '7th Installment',
              '8th Installment',
              '9th Installment',
              '10th Installment',
            ],
          },
          {
            key: 'select ',
            label: 'Payment mode ',
            name: ['customfields', 'payment_mode'],
            id: 'PaymentMode ',
            type: 'select',
            required: 'require',
            options: ['DES Bank Account/UPI', 'University Bank Account', 'PayUMoney', 'Cash/DD'],
          },
          {
            key: 'number',
            label: 'Total Course Fee',
            name: ['customfields', 'total_course_fee'],
            place: 'eg: 20000',
            id: 'Total Course Fee',
            type: 'number',
            required: 'require'
          },
          {
            key: 'number',
            label: 'Total Paid Amount',
            place: 'eg: 20000',
            name: ['customfields', 'total_paid_amount'],
            id: 'Total Paid Amount',
            type: 'number',
          },
          {
            key: 'number',
            label: 'Paid Amount',
            name: ['customfields', 'paid_amount'],
            place: 'eg: 20000',
            id: 'Paid Amount',
            type: 'number',
          },

          {
            key: 'email',
            label: 'Counselor Email',
            name: ['customfields', 'counselor_email'],
            place: 'Enter Counselor Email',
            id: 'counselor_email',
            type: 'email',
            required: 'require'
          },
          {
            key: 'file',
            label: 'Upload Fee Receipt Screenshot',
            name: 'image',
            place: 'Upload Fee Receipt Screenshot',
            id: 'Upload Fee Receipt Screenshot',
            type: 'file',
            required: 'require'

          },
          {
            key: 'text',
            label: 'Uplaod Student Document',
            name: ['customfields', 'upload_student_document'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'text',
          },
          {
            key: 'textarea',
            label: 'Remark',
            name: ['customfields', 'remark'],
            place: 'Enter Counselor Email',
            id: 'Uplaod Student Document',
            type: 'textarea',
          },
        ],
      },
    ],
  },
];

export default formData;
