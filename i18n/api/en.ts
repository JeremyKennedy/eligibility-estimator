import { Translations } from './index'

const en: Translations = {
  benefit: {
    oas: 'Old Age Security (OAS)',
    gis: 'Guaranteed Income Supplement (GIS)',
    allowance: 'Allowance',
    afs: 'Allowance for the Survivor',
  },
  category: {
    incomeDetails: 'Income Details',
    personalInformation: 'Personal Information',
    partnerDetails: 'Partner Details',
    legalStatus: 'Legal Status',
    socialAgreement: 'Social Agreement Countries',
  },
  result: {
    eligible: 'Eligible',
    ineligible: 'Not eligible',
    conditional: 'Conditionally eligible...',
    moreInfo: 'Need more information...',
    invalid: 'Request is invalid!',
  },
  question: {
    income: 'What is your current annual net income in Canadian Dollars?',
    age: 'What is your current age?',
    livingCountry: 'What country are you currently living in?',
    legalStatus: 'What is your current legal status?',
    legalStatusOther: 'Please specify:',
    yearsInCanadaSince18:
      'How many years have you lived in Canada since the age of 18?',
    maritalStatus: 'What is your current marital status?',
    partnerIncome:
      "What is your partner's annual net income in Canadian dollars?",
    partnerBenefitStatus: 'Which of the following applies to you?',
    everLivedSocialCountry:
      'Have you ever lived in a country with an established <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/foreign-employees-employers/canada-s-social-agreements-other-countries.html" target="_blank">social security agreement</a>?',
  },
  questionOptions: {
    legalStatus: [
      { key: 'canadianCitizen', text: 'Canadian citizen' },
      {
        key: 'permanentResident',
        text: 'Permanent resident or landed immigrant (non-sponsored)',
      },
      {
        key: 'sponsored',
        text: 'Permanent resident or landed immigrant (sponsored)',
      },
      { key: 'indianStatus', text: 'Indian status or status card' },
      {
        key: 'other',
        text: 'Other (Example: Temporary resident, student, temporary worker, etc.)',
      },
    ],
    maritalStatus: [
      { key: 'single', text: 'Single' },
      { key: 'married', text: 'Married' },
      { key: 'commonLaw', text: 'Common-law' },
      { key: 'widowed', text: 'Widowed' },
      { key: 'divorced', text: 'Divorced' },
      { key: 'separated', text: 'Separated' },
    ],
    partnerBenefitStatus: [
      { key: 'fullOas', text: 'My partner receives full OAS' },
      { key: 'fullOasGis', text: 'My partner receives full OAS and GIS' },
      { key: 'partialOas', text: 'My partner receives partial OAS' },
      { key: 'partialOasGis', text: 'My partner receives partial OAS and GIS' },
      { key: 'allowance', text: 'My partner receives the Allowance' },
      { key: 'none', text: 'None of the above' },
      { key: 'helpMe', text: 'Help me find out' },
    ],
    livingCountry: [
      { key: 'CAN', text: 'Canada' },
      { key: 'AFG', text: 'Afghanistan' },
      { key: 'ALB', text: 'Albania' },
      { key: 'DZA', text: 'Algeria' },
      { key: 'AND', text: 'Andorra' },
      { key: 'AGO', text: 'Angola' },
      { key: 'ATG', text: 'Antigua and Barbuda' },
      { key: 'ARG', text: 'Argentina' },
      { key: 'ARM', text: 'Armenia' },
      { key: 'AUS', text: 'Australia' },
      { key: 'AUT', text: 'Austria' },
      { key: 'AZE', text: 'Azerbaijan' },
      { key: 'BHS', text: 'Bahamas' },
      { key: 'BHR', text: 'Bahrain' },
      { key: 'BGD', text: 'Bangladesh' },
      { key: 'BRB', text: 'Barbados' },
      { key: 'BLR', text: 'Belarus' },
      { key: 'BEL', text: 'Belgium' },
      { key: 'BLZ', text: 'Belize' },
      { key: 'BEN', text: 'Benin' },
      { key: 'BTN', text: 'Bhutan' },
      { key: 'BOL', text: 'Bolivia (Plurinational State of)' },
      { key: 'BIH', text: 'Bosnia and Herzegovina' },
      { key: 'BWA', text: 'Botswana' },
      { key: 'BRA', text: 'Brazil' },
      { key: 'BRN', text: 'Brunei Darussalam' },
      { key: 'BGR', text: 'Bulgaria' },
      { key: 'BFA', text: 'Burkina Faso' },
      { key: 'BDI', text: 'Burundi' },
      { key: 'CPV', text: 'Cabo Verde' },
      { key: 'KHM', text: 'Cambodia' },
      { key: 'CMR', text: 'Cameroon' },
      { key: 'CAF', text: 'Central African Republic' },
      { key: 'TCD', text: 'Chad' },
      { key: 'CHL', text: 'Chile' },
      { key: 'CHN', text: 'China' },
      { key: 'COL', text: 'Colombia' },
      { key: 'COM', text: 'Comoros' },
      { key: 'COG', text: 'Congo' },
      { key: 'CRI', text: 'Costa Rica' },
      { key: 'CIV', text: "Côte d'Ivoire" },
      { key: 'HRV', text: 'Croatia' },
      { key: 'CUB', text: 'Cuba' },
      { key: 'CYP', text: 'Cyprus' },
      { key: 'CZE', text: 'Czechia' },
      { key: 'COD', text: 'Democratic Republic of the Congo' },
      { key: 'DNK', text: 'Denmark' },
      { key: 'DJI', text: 'Djibouti' },
      { key: 'DMA', text: 'Dominica' },
      { key: 'DOM', text: 'Dominican Republic' },
      { key: 'ECU', text: 'Ecuador' },
      { key: 'EGY', text: 'Egypt' },
      { key: 'SLV', text: 'El Salvador' },
      { key: 'GNQ', text: 'Equatorial Guinea' },
      { key: 'ERI', text: 'Eritrea' },
      { key: 'EST', text: 'Estonia' },
      { key: 'SWZ', text: 'Eswatini' },
      { key: 'ETH', text: 'Ethiopia' },
      { key: 'FJI', text: 'Fiji' },
      { key: 'FIN', text: 'Finland' },
      { key: 'FRA', text: 'France' },
      { key: 'GAB', text: 'Gabon' },
      { key: 'GMB', text: 'Gambia' },
      { key: 'GEO', text: 'Georgia' },
      { key: 'DEU', text: 'Germany' },
      { key: 'GHA', text: 'Ghana' },
      { key: 'GRC', text: 'Greece' },
      { key: 'GRD', text: 'Grenada' },
      { key: 'GTM', text: 'Guatemala' },
      { key: 'GIN', text: 'Guinea' },
      { key: 'GNB', text: 'Guinea-Bissau' },
      { key: 'GUY', text: 'Guyana' },
      { key: 'HTI', text: 'Haiti' },
      { key: 'VAT', text: 'Holy See' },
      { key: 'HND', text: 'Honduras' },
      { key: 'HUN', text: 'Hungary' },
      { key: 'ISL', text: 'Iceland' },
      { key: 'IND', text: 'India' },
      { key: 'IDN', text: 'Indonesia' },
      { key: 'IRN', text: 'Iran' },
      { key: 'IRQ', text: 'Iraq' },
      { key: 'IRL', text: 'Ireland' },
      { key: 'ISR', text: 'Israel' },
      { key: 'ITA', text: 'Italy' },
      { key: 'JAM', text: 'Jamaica' },
      { key: 'JPN', text: 'Japan' },
      { key: 'JOR', text: 'Jordan' },
      { key: 'KAZ', text: 'Kazakhstan' },
      { key: 'KEN', text: 'Kenya' },
      { key: 'KIR', text: 'Kiribati' },
      { key: 'KWT', text: 'Kuwait' },
      { key: 'KGZ', text: 'Kyrgyzstan' },
      { key: 'LAO', text: 'Laos' },
      { key: 'LVA', text: 'Latvia' },
      { key: 'LBN', text: 'Lebanon' },
      { key: 'LSO', text: 'Lesotho' },
      { key: 'LBR', text: 'Liberia' },
      { key: 'LBY', text: 'Libya' },
      { key: 'LIE', text: 'Liechtenstein' },
      { key: 'LTU', text: 'Lithuania' },
      { key: 'LUX', text: 'Luxembourg' },
      { key: 'MDG', text: 'Madagascar' },
      { key: 'MWI', text: 'Malawi' },
      { key: 'MYS', text: 'Malaysia' },
      { key: 'MDV', text: 'Maldives' },
      { key: 'MLI', text: 'Mali' },
      { key: 'MLT', text: 'Malta' },
      { key: 'MHL', text: 'Marshall Islands' },
      { key: 'MRT', text: 'Mauritania' },
      { key: 'MUS', text: 'Mauritius' },
      { key: 'MEX', text: 'Mexico' },
      { key: 'FSM', text: 'Micronesia' },
      { key: 'MDA', text: 'Moldova' },
      { key: 'MCO', text: 'Monaco' },
      { key: 'MNG', text: 'Mongolia' },
      { key: 'MNE', text: 'Montenegro' },
      { key: 'MAR', text: 'Morocco' },
      { key: 'MOZ', text: 'Mozambique' },
      { key: 'MMR', text: 'Myanmar' },
      { key: 'NAM', text: 'Namibia' },
      { key: 'NRU', text: 'Nauru' },
      { key: 'NPL', text: 'Nepal' },
      { key: 'NLD', text: 'Netherlands' },
      { key: 'NZL', text: 'New Zealand' },
      { key: 'NIC', text: 'Nicaragua' },
      { key: 'NER', text: 'Niger' },
      { key: 'NGA', text: 'Nigeria' },
      { key: 'PRK', text: "Korea (Democratic People's Republic of)" },
      { key: 'MKD', text: 'North Macedonia' },
      { key: 'NOR', text: 'Norway' },
      { key: 'OMN', text: 'Oman' },
      { key: 'PAK', text: 'Pakistan' },
      { key: 'PLW', text: 'Palau' },
      { key: 'PSE', text: 'Palestine' },
      { key: 'PAN', text: 'Panama' },
      { key: 'PNG', text: 'Papua New Guinea' },
      { key: 'PRY', text: 'Paraguay' },
      { key: 'PER', text: 'Peru' },
      { key: 'PHL', text: 'Philippines' },
      { key: 'POL', text: 'Poland' },
      { key: 'PRT', text: 'Portugal' },
      { key: 'QAT', text: 'Qatar' },
      { key: 'ROU', text: 'Romania' },
      { key: 'RUS', text: 'Russia' },
      { key: 'RWA', text: 'Rwanda' },
      { key: 'KNA', text: 'Saint Kitts and Nevis' },
      { key: 'LCA', text: 'Saint Lucia' },
      { key: 'VCT', text: 'Saint Vincent and the Grenadines' },
      { key: 'WSM', text: 'Samoa' },
      { key: 'SMR', text: 'San Marino' },
      { key: 'STP', text: 'Sao Tome and Principe' },
      { key: 'SAU', text: 'Saudi Arabia' },
      { key: 'SEN', text: 'Senegal' },
      { key: 'SRB', text: 'Serbia' },
      { key: 'SYC', text: 'Seychelles' },
      { key: 'SLE', text: 'Sierra Leone' },
      { key: 'SGP', text: 'Singapore' },
      { key: 'SVK', text: 'Slovakia' },
      { key: 'SVN', text: 'Slovenia' },
      { key: 'SLB', text: 'Solomon Islands' },
      { key: 'SOM', text: 'Somalia' },
      { key: 'ZAF', text: 'South Africa' },
      { key: 'KOR', text: 'Republic of Korea' },
      { key: 'SSD', text: 'South Sudan' },
      { key: 'ESP', text: 'Spain' },
      { key: 'LKA', text: 'Sri Lanka' },
      { key: 'SDN', text: 'Sudan' },
      { key: 'SUR', text: 'Suriname' },
      { key: 'SWE', text: 'Sweden' },
      { key: 'CHE', text: 'Switzerland' },
      { key: 'SYR', text: 'Syrian Arab Republic' },
      { key: 'TJK', text: 'Tajikistan' },
      { key: 'TZA', text: 'Tanzania' },
      { key: 'THA', text: 'Thailand' },
      { key: 'TLS', text: 'Timor-Leste' },
      { key: 'TGO', text: 'Togo' },
      { key: 'TON', text: 'Tonga' },
      { key: 'TTO', text: 'Trinidad and Tobago' },
      { key: 'TUN', text: 'Tunisia' },
      { key: 'TUR', text: 'Turkey' },
      { key: 'TKM', text: 'Turkmenistan' },
      { key: 'TUV', text: 'Tuvalu' },
      { key: 'UGA', text: 'Uganda' },
      { key: 'UKR', text: 'Ukraine' },
      { key: 'ARE', text: 'United Arab Emirates' },
      { key: 'GBR', text: 'United Kingdom ' },
      { key: 'USA', text: 'United States of America' },
      { key: 'URY', text: 'Uruguay' },
      { key: 'UZB', text: 'Uzbekistan' },
      { key: 'VUT', text: 'Vanuatu' },
      { key: 'VEN', text: 'Venezuela ' },
      { key: 'VNM', text: 'Vietnam' },
      { key: 'YEM', text: 'Yemen' },
      { key: 'ZMB', text: 'Zambia' },
      { key: 'ZWE', text: 'Zimbabwe' },
    ],
  },
  detail: {
    eligible:
      'Based on the information provided, you are likely eligible for this benefit.',
    eligiblePartialOas:
      'Based on the information you or your partner have provided, you are entitled to a partial Old Age Security pension. You should contact Service Canada for more information about Allowance/Guaranteed Income Supplement payment amounts.',
    eligibleWhen60ApplyNow:
      'You will likely be eligible when you turn 60, however you may be able to apply now. Please contact Service Canada for more information.',
    eligibleWhen65ApplyNow:
      'You will likely be eligible when you turn 65, however you may be able to apply now. Please contact Service Canada for more information.',
    eligibleWhen60: 'You will likely be eligible when you turn 60.',
    eligibleWhen65: 'You will likely be eligible when you turn 65.',
    mustBe60to64:
      'You must be between the ages of 60 and 64 to be eligible for this benefit.',
    mustBeInCanada:
      'You need to live in Canada to be eligible for this benefit.',
    mustBeOasEligible:
      'You need to be eligible for Old Age Security to be eligible for this benefit.',
    mustCompleteOasCheck:
      'You need to complete the Old Age Security eligibility assessment first.',
    mustBeWidowed:
      'You must be a surviving partner or widowed to be eligible for this benefit.',
    mustBePartnered:
      'You must be common-law or married to be eligible for this benefit.',
    mustHavePartnerWithOas:
      'Your partner must be receiving Old Age Security to be eligible for this benefit.',
    mustMeetIncomeReq:
      'Your income is too high to be eligible for this benefit.',
    mustMeetYearReq:
      'You have not lived in Canada for the required number of years to be eligible for this benefit.',
    ineligibleYearsOrCountry:
      'You currently do not appear to be eligible for this benefit as you have indicated that you have not lived in Canada for the minimum period of time or lived in a country that Canada has a social security agreement with. However, you may be in the future if you reside in Canada for the minimum required number of years.',
    conditional:
      'You may be eligible for this benefit, you are encouraged to contact Service Canada to confirm.',
    dependingOnAgreement:
      "You may be eligible to receive this benefit, depending Canada's agreement with this country. You are encouraged to contact Service Canada.",
    dependingOnAgreementWhen60:
      "You may be eligible to receive this benefit when you turn 60, depending Canada's agreement with this country. You are encouraged to contact Service Canada.",
    dependingOnAgreementWhen65:
      "You may be eligible to receive this benefit when you turn 65, depending Canada's agreement with this country. You are encouraged to contact Service Canada.",
    dependingOnLegal:
      'You may be eligible to receive this benefit, depending on your legal status in Canada. You are encouraged to contact Service Canada.',
    dependingOnLegalSponsored:
      'You may be eligible for this benefit, you are encouraged to contact Service Canada to confirm.',
    dependingOnLegalWhen60:
      'You may be eligible to receive this benefit when you turn 60, depending on your legal status in Canada. You are encouraged to contact Service Canada.',
    dependingOnLegalWhen65:
      'You may be eligible to receive this benefit when you turn 65, depending on your legal status in Canada. You are encouraged to contact Service Canada.',
  },
  summaryTitle: {
    moreInfo: 'More information needed',
    unavailable: 'Unable to provide an estimation',
    availableEligible: 'Likely eligible for benefits',
    availableIneligible: 'Likely not eligible for benefits',
  },
  summaryDetails: {
    moreInfo:
      'You need to answer the remaining questions on the previous tab before an estimation can be provided.',
    unavailable:
      'Based on the information provided, we are unable to determine your eligibility. We encourage you to contact Service Canada using the link below.\nContact Service Canada',
    availableEligible:
      'Based on the information you have provided, you are likely eligible for the following benefits.',
    availableIneligible:
      'Based on the information you have provided, you are likely not eligible for any benefits. See the details below for more information.',
  },
}
export default en
