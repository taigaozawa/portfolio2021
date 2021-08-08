import Head from 'next/head'
import Header from '../components/header';
import Twitter from '../components/twitter';
import GitHub from '../components/github';
import External from '../components/external';
import LangDropdown from '../components/langDropdown';
import { useState } from 'react';
import useInterval from 'use-interval';

const Profile = () => {
  const [lang, setLang] = useState('ja');

  const [displayedBasicInfoTitle, setDisplayedBasicInfoTitle] = useState('');
  const [displayedEducationTitle, setDisplayedEducationTitle] = useState('');
  const [displayedCareerTitle, setDisplayedCareerTitle] = useState('');
  const [displayedSkillsTitle, setDisplayedSkillsTitle] = useState('');
  const [displayedInterestsTitle, setDisplayedInterestsTitle] = useState('');
  const [displayedContactTitle, setDisplayedContactTitle] = useState('');
  const [messageTimer, setMessageTimer] = useState(0);
  const [messageColor, setMessageColor] = useState('yellow');
  const basicInfoTitles = [
    '基本情報',
    'Basic Information'
  ]
  const educationTitles = [
    '学歴',
    'Education'
  ]
  const careerTitles = [
    '職歴',
    'Career'
  ]
  const skillsTitles = [
    '資格・スキル',
    'Qualifications & Skills'
  ]
  const interestsTitles = [
    '興味',
    'Interests'
  ]
  const contactTitles = [
    'ソーシャルメディア',
    'Social Media'
  ]

  const qualifications = [
    ['応用情報技術者試験', 'Applied Information Technology Engineer Examination'],
    ['ディープラーニングG検定', 'Deep Learning for GENERAL'],
    ['中学校・高校教員免許（理科）', 'Teacher\'s Licences (Science)'],
    ['英検準1級', 'EIKEN English Proficiency Test Grade Pre 1'],
    ['TOEIC L&R 850', 'TOEIC L&R 850'],
    ['法学検定ベーシック（法学部1,2年次程度）', 'Hoken (Law Test) Basic'],
    ['普通自動車免許（MT）', 'Car Driver\'s Licence (MT)'],
    ['普通自動二輪車免許（MT）', 'Motorcycle Driver\'s Licene (MT)'],
    ['弓道弐段', 'Kyudo Japanese Archery 2 Dan']
  ];

  const businessSkills = [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express.js',
    'React.js',
    'Next.js',
    'jQuery',
    'Backbone.js',
    'Ruby',
    'Ruby on Rails',
    'Java',
    'Spring Framework',
    'SQL / RDB',
    'HTML',
    'CSS',
    'Docker',
    'Git / GitHub / GitLab',
    'JIRA',
    'Adobe Illustrator'
  ];
  const personalSkills = [
    'Gatsby.js',
    'Nest.js',
    'Vue.js',
    'Nuxt.js',
    'Angular.js',
    'C',
    'C++',
    'Swift',
    'Python',
    'Scala',
    'Play Framework',
    'Go',
    'Fortran',
    'AWS',
    'Azure',
    'GCP',
    'Adobe Photoshop',
    'Adobe XD',
    'Adobe Premire Pro',
    'Adobe After Effects'
  ];

  const interests = [
    ['物理', 'Physics'],
    ['数学', 'Mathematics'],
    ['コンピュータ・プログラミング', 'Computer & Programming'],
    ['デザイン・タイポグラフィ（フォント）', 'Graphic Design & Typography'],
    ['法律', 'Law'],
    ['経営・経済', 'Business & Economics'],
    ['教育', 'Education'],
    ['海外旅行・国内旅行', 'Overseas & Domestic Trip'],
    ['スキー・スノーボード', 'Skiing & Snowboarding'],
    ['弓道', 'Kyudo, Japanese style archery'],
    ['DIY', 'DIY'],
  ];

  const messageColors = ['yellow', 'pink', 'green', 'sky', 'red', 'gray', 'blue', 'indigo', 'purple']
  const messageBuffer = 30;
  const basicInfoPatterns = basicInfoTitles.map(msg => {
    const patterns: string[] = Array(msg.length + messageBuffer).fill('');
    return patterns.map((p, i) => msg.slice(0, i + 1));
  }).flat();
  const educationPatterns = educationTitles.map(msg => {
    const patterns: string[] = Array(msg.length + messageBuffer).fill('');
    return patterns.map((p, i) => msg.slice(0, i + 1));
  }).flat();
  const careerPatterns = careerTitles.map(msg => {
    const patterns: string[] = Array(msg.length + messageBuffer).fill('');
    return patterns.map((p, i) => msg.slice(0, i + 1));
  }).flat();
  const skillsPatterns = skillsTitles.map(msg => {
    const patterns: string[] = Array(msg.length + messageBuffer).fill('');
    return patterns.map((p, i) => msg.slice(0, i + 1));
  }).flat();
  const interestsPatterns = interestsTitles.map(msg => {
    const patterns: string[] = Array(msg.length + messageBuffer).fill('');
    return patterns.map((p, i) => msg.slice(0, i + 1));
  }).flat();
  const contactPatterns = contactTitles.map(msg => {
    const patterns: string[] = Array(msg.length + messageBuffer).fill('');
    return patterns.map((p, i) => msg.slice(0, i + 1));
  }).flat();

  useInterval(() => {
    setMessageTimer(messageTimer + 1);
    setDisplayedBasicInfoTitle(basicInfoPatterns[messageTimer % basicInfoPatterns.length]);
    setDisplayedEducationTitle(educationPatterns[messageTimer % educationPatterns.length]);
    setDisplayedCareerTitle(careerPatterns[messageTimer % careerPatterns.length]);
    setDisplayedSkillsTitle(skillsPatterns[messageTimer % skillsPatterns.length]);
    setDisplayedInterestsTitle(interestsPatterns[messageTimer % interestsPatterns.length]);
    setDisplayedContactTitle(contactPatterns[messageTimer % contactPatterns.length]);
  }, 120);

  useInterval(() => {
    setMessageColor(messageColors[(messageTimer) % messageColors.length])
  }, 7000);

  return (
    <div>
      <Head>
        <title>TaigaOzawa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <main className="bg-gray-50 min-h-screen">

          <div className="fixed w-screen mt-14">
            <div className="flex justify-center">
              <div className="w-screen max-w-7xl px-3 flex justify-end">
                <LangDropdown lang={lang} setLang={setLang} />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mt-36 text-lg sm:text-2xl font-bold font-montserrat">
              <div className={`px-5 border-${messageColor}-400 border rounded pt-3 pb-2 transition text-gray-1000 duration-1000`}>
                プロフィール Profile
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mt-8 text-2xl font-bold font-montserrat">
              <div className={`px-3 border-b-4 border-${messageColor}-400 transition duration-1000`}>
                {displayedBasicInfoTitle}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 mt-5 flex justify-center">
            <div className="break-words overflow-scroll">
              <table className="">
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {lang === 'ja' ? '氏名' : 'NAME'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    {lang === 'ja' ? '小澤 泰河' : 'Taiga Ozawa'}
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {lang === 'ja' ? '誕生年' : 'BIRTHYEAR'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    {lang === 'ja' ? '1997（平成9）年' : '1997'}
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {lang === 'ja' ? '出生地' : 'BIRTHPLACE'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    {lang === 'ja' ? '兵庫県伊丹市' : 'Itami City, Hyogo Pref. (near Osaka), Japan'}
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {lang === 'ja' ? '居住地' : 'RESIDENCE'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    {lang === 'ja' ? '茨城県つくば市' : 'Tsukuba City, Ibaraki Pref. (near Tokyo), Japan'}
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {lang === 'ja' ? '所属' : 'UNIVERSITY'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    {lang === 'ja' ? '筑波大学 大学院' : 'The graduate school, University of Tsukuba'}
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {lang === 'ja' ? '専攻' : 'MAJOR'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    {lang === 'ja' ? '理工情報生命学術院 数理物質科学研究群 物理学学位プログラム' : 'Master\'s Program in Physics, Degree Programs in Pure and Applied Sciences, Graduate School of Science and Technology'}
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {lang === 'ja' ? '研究室' : 'LAB.'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    {lang === 'ja' ? '原子核理論研究室（計算科学研究センター）' : 'Nuclear Theory Group, Center for Computational Sciences'}
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mt-12 text-2xl font-bold font-montserrat">
              <div className={`px-3 border-b-4 border-${messageColor}-400 transition duration-1000`}>
                {displayedEducationTitle}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 mt-5 flex justify-center">
            <div className="break-words overflow-scroll">
              <table className="">
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2020/04 - 2022/03'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    {lang === 'ja' ? '筑波大学 大学院 理工情報生命学術院 数理物質科学研究群 物理学学位プログラム'
                      :
                      'Master\'s Program in Physics, Degree Programs in Pure and Applied Sciences, Graduate School of Science and Technology, University of Tsukuba'}
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2016/04 - 2020/03'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    {lang === 'ja' ? '首都大学東京 都市教養学部 理工学系 物理学コース（現・東京都立大学 理学部 物理学科）'
                      :
                      'Department of Physics, Tokyo Metropolitan University'}
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2013/04 - 2016/03'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    {lang === 'ja' ? '私立淑徳高等学校'
                      :
                      'Shukutoku High School'}
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mt-12 text-2xl font-bold font-montserrat">
              <div className={`px-3 border-b-4 border-${messageColor}-400 transition duration-1000`}>
                {displayedCareerTitle}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 mt-5 flex justify-center">
            <div className="break-words overflow-scroll">
              <div className="flex justify-center mb-3 font-bold text-sm text-gray-600">
                {lang === 'ja' ? 'インターンシップ・アルバイトを含む' : 'Including internship and part-time experiences'}
              </div>

              <table className="">
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2022 -'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    <div>
                      <a
                        target="_blank"
                        href="https://www.future.co.jp"
                        className="flex cursor-pointer hover:text-gray-500 transition duration-200"
                      >
                        {lang === 'ja' ? 'フューチャー株式会社（予定）'
                          :
                          'Future Corporation (expected)'}
                        <External className="pt-1 fill-current hover:text-gray-500 " />
                      </a>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {lang === 'ja' ?
                        '正社員 / ITコンサルタント / ソフトウェア開発'
                        :
                        'Full-time / IT Consultant / Software Development'
                      }
                    </div>

                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2020/05 - 2022/03'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    <a target="_blank" href="https://dwango.co.jp/">
                      <div className="flex cursor-pointer hover:text-gray-500 transition duration-200">
                        {lang === 'ja' ? '株式会社ドワンゴ'
                          :
                          'Dwango Co., Ltd.'}
                        <External className="pl-2 pt-1 fill-current hover:text-gray-500 " />
                      </div>
                    </a>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {lang === 'ja' ?
                        '学生アルバイト / プログラミング等教材開発 / 社内ツール開発'
                        :
                        'Part-time / Learning material development on programing  / Tool development'
                      }
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2020/09 - 2021/05'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    <a target="_blank" href="https://rit-inc.co.jp/">
                      <div className="flex cursor-pointer hover:text-gray-500 transition duration-200">
                        {lang === 'ja' ? '株式会社RIT'
                          :
                          'RIT Inc.'}
                        <External className="pl-2 pt-1 fill-current hover:text-gray-500 " />
                      </div>
                    </a>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {lang === 'ja' ?
                        '長期インターンシップ / ソフトウェア開発'
                        :
                        'Long-term internship / Software development'
                      }
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2020/11'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    <a target="_blank" href="https://www.accenture.com/jp-ja">
                      <div className="flex cursor-pointer hover:text-gray-500 transition duration-200">
                        {lang === 'ja' ? 'アクセンチュア株式会社'
                          :
                          'Accenture Japan Ltd'}
                        <External className="pl-2 pt-1 fill-current hover:text-gray-500 " />
                      </div>
                    </a>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {lang === 'ja' ?
                        'インターンシップ（ハッカソン型）/ ソフトウェア開発'
                        :
                        'Internship（Hackathon） / Software development'
                      }

                    </div>
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2020/04 - 2020/10'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    <a target="_blank" href="http://www.shukutoku-school.com/index.html">
                      <div className="flex cursor-pointer hover:text-gray-500 transition duration-200">
                        {lang === 'ja' ? '淑徳日本語学校'
                          :
                          'Shukutoku Japanese Language School'}
                        <External className="pl-2 pt-1 fill-current hover:text-gray-500 " />
                      </div>
                    </a>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {lang === 'ja' ?
                        '非常勤講師 / 留学生向け集団授業（理科）'
                        :
                        'Part-time / Science lecture to international students'
                      }

                    </div>
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2020/10'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    <a target="_blank" href="https://www.nttdata.com/">
                      <div className="flex cursor-pointer hover:text-gray-500 transition duration-200">
                        {lang === 'ja' ? '株式会社エヌ・ティ・ティ・データ（NTTデータ）'
                          :
                          'NTT DATA Corporation'}
                        <External className="pl-2 pt-1 fill-current hover:text-gray-500 " />
                      </div>
                    </a>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {lang === 'ja' ?
                        'インターンシップ / ソフトウェア開発'
                        :
                        'Internship / Software development'
                      }
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2020/08 - 2021/09'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    <a target="_blank" href="https://www.future.co.jp">
                      <div className="flex cursor-pointer hover:text-gray-500 transition duration-200">
                        {lang === 'ja' ? 'フューチャー株式会社'
                          :
                          'Future Corporation'}
                        <External className="pl-2 pt-1 fill-current hover:text-gray-500 " />
                      </div>
                    </a>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {lang === 'ja' ?
                        'インターンシップ / ソフトウェア開発'
                        :
                        'Internship / Software development'
                      }
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {'2020/08'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-sm sm:text-base">
                    <a target="_blank" href="https://caraquri.com/">
                      <div className="flex cursor-pointer hover:text-gray-500 transition duration-200">
                        {lang === 'ja' ? 'からくり株式会社'
                          :
                          'Caraquri Inc.'}
                        <External className="pl-2 pt-1 fill-current hover:text-gray-500 " />
                      </div>
                    </a>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {lang === 'ja' ?
                        'インターンシップ / ソフトウェア開発'
                        :
                        'Internship / Software development'
                      }
                    </div>
                  </td>
                </tr>
              </table>
              <div>
                <div className="px-2 mt-2 text-xs sm:text-sm text-gray-500">
                  {lang === 'ja' ?
                    'その他、塾講師・教育実習・飲食店アルバイトなど'
                    :
                    'In addition, some experiences as a high-school & prep-school lecturer and a food sevice worker'}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mt-12 text-2xl font-bold font-montserrat">
              <div className={`px-3 border-b-4 border-${messageColor}-400 transition duration-1000`}>
                {displayedSkillsTitle}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 mt-5 flex justify-center">
            <div className="break-words overflow-scroll">

              <table className="">
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {lang === 'ja' ? '資格' : 'QUALIFICATION'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-base">
                    <div className="">
                      {qualifications.map((qualification) => {
                        return (
                          <div className="text-sm bg-gray-200 mx-0.5 my-1 px-1 rounded text-gray-700 font-bold hover:bg-sky-300 transition duration-200 cursor-default">
                            {lang === 'ja'
                              ?
                              qualification[0]
                              :
                              qualification[1]
                            }
                          </div>
                        )
                      })}
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {lang === 'ja' ? '業務経験のある技術等' : 'TECH SKILLS (BUSINESS EXP.)'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-base">
                    <div className="flex flex-wrap">
                      {businessSkills.map(skill => {
                        return (
                          <div className="text-sm bg-gray-200 m-0.5 px-1 rounded text-gray-700 font-bold hover:bg-sky-300 transition duration-200 cursor-default">
                            {skill}
                          </div>)
                      })}
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-2 font-bold text-gray-600 pt-3 pb-2 text-xs sm:text-sm">
                    {lang === 'ja' ? '使用経験のある技術等' : 'TECH SKILLS (PERSONAL EXP.)'}
                  </td>
                  <td className="px-2 pt-3 pb-2 text-base">
                    <div className="flex flex-wrap">
                      {personalSkills.map(skill => {
                        return (
                          <div className="text-sm bg-gray-200 m-0.5 px-1 rounded text-gray-700 font-bold hover:bg-sky-300 transition duration-200 cursor-default">
                            {skill}
                          </div>)
                      })}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mt-12 text-2xl font-bold font-montserrat">
              <div className={`px-3 border-b-4 border-${messageColor}-400 transition duration-1000`}>
                {displayedInterestsTitle}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 mt-5 flex justify-center">
            <div className="break-words overflow-scroll flex flex-wrap flex-col">
              {interests.map(e =>
                <div className="border border-gray-400 text-gray-600 text-sm rounded mx-0.5 px-1 my-0.5 hover:bg-pink-500 hover:text-white transition duration-100 cursor-default"># {
                  lang === 'ja' ?
                    e[0]
                    :
                    e[1]
                }</div>)}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mt-12 text-2xl font-bold font-montserrat">
              <div className={`px-3 border-b-4 border-${messageColor}-400 transition duration-1000`}>
                {displayedContactTitle}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <a target="_blank" href="https://twitter.com/taigaozawa">
              <div className="cursor-pointer">
                <Twitter className="fill-current text-gray-800 hover:text-gray-500 trainsition duration-500" width="30px" height="30px" />
              </div>
            </a>
            <a target="_blank" href="https://github.com/taigaozawa">
              <div className="cursor-pointer">
                <GitHub className="ml-2 fill-current hover:text-gray-500 transition duration-500" width="30px" height="30px" />
              </div>
            </a>
          </div>

          <div className="pb-24"></div>
        </main>

        <footer>
          <div className="flex justify-center bg-gray-50 pb-5 w-screen text-sm text-gray-700">
            ©️2021 Taiga Ozawa. All rights reserved.
          </div>
        </footer>
      </div>
    </div >
  )
};

export default Profile;
