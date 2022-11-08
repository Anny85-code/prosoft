import bannerImg from '../../assets/projectDetails/banner.png';
import cardImg from '../../assets/projectDetails/card.png';
import pks from '../../assets/projectDetails/pks.webp';
import rmbanner from '../../assets/projectDetails/rmbanner.png';
import rm from '../../assets/projectDetails/rm.webp';
import projectImg1 from '../../assets/projectDetails/project1.png';
import projectImg2 from '../../assets/projectDetails/project2.png';
import projectImgf from '../../assets/projectDetails/imgf.png';
import projectImgq from '../../assets/projectDetails/imgq.jpeg';
import hrbg from '../../assets/projectDetails/hrbg.jpg';
import hrsmall from '../../assets/projectDetails/hrsmall.webp';
import hrmed from '../../assets/projectDetails/hrmed.jfif';
import hrmedbg from '../../assets/projectDetails/hrmedbg.jpeg';
import ss from '../../assets/projectDetails/ss.jfif';
import ssbg from '../../assets/projectDetails/ssbg.jfif';
import oop from '../../assets/projectDetails/oop.jfif';
import oopbg from '../../assets/projectDetails/oopbg.jpg';

const fakeData = [
  {
    id: 1,
    banner: bannerImg,
    title: 'Project Details',
    heading: 'One of our best product that makes us stand out',
    subHeading:
      'Windows, Computers, System, Software, Choice, Accounting, Printer, VISTA',
    card: {
      client: 'Paula Tekle',
      categories: 'Installation',
      date: '23 June 2017',
      tags: 'system, software, updating',
      img: pks,
    },
    para1:
      'Darts is a sporting goods company that has most of its outlets in the western states. The company computers are connected to each other via network. A network has 273 computers and it consists of the following hardware systems.8 Windows Server 2003 R2 Servers 2 Linux Servers running Red Hat Linux Enterprise 20 computers running MAC OS X version 10.4 Tiger 32 computers with Windows XP installed 126 computers with Windows Vista installed 95 computers with Windows 7 installed With advancements in the growth of the company, the network requires upgrading and modifications. Therefore, the company is focusing on the upgrade of servers, computer systems, and software programs.',
    para2:
      'The Accounting department of the company has Windows XP installed in all of the computers. The accounting director of the department wants to upgrade the operating system Windows 7. The department would get certain benefits through an upgrade of the operating system that are discussed as follows',
    para3:
      'First, the Windows 7 provides a great user-friendly interface for all the users to perform their desired tasks. The design of taskbar and system trays are much user-friendly compared to the Windows XP.',
    summary:
      'However, anyone who was more comfortable with the Windows XP outlook can choose an option to change design of Windows 7 back to XP. Other interesting features that are most beneficial for the businesses are the desktop slideshow and screen savers. The accounting department users may activate the desktop slideshow to most recent financial statements and thus, keep a regular check. The bookkeeping and other accounting functions flourish with this feature of the Windows 7',
    img1: projectImg1,
    img2: projectImg2,
  },
  {
    id: 2,
    banner: hrbg,
    title: 'Project Details',
    heading: 'One of our best product that makes us stand out',
    subHeading: 'CAPTERRO - Performance Appraisal Software: People-Goal.',
    card: {
      client: 'Chris Ramsey',
      categories: 'Personnel',
      date: '23 September 2020',
      tags: 'Orientation, Induction, Creative',
      img: hrsmall,
    },
    para1:
      'RealWorth Multinational (Headquartered at Berane, Montenegro) is a global investment based FTSE100 company which is involved in such sectors as: Corporate pension, Investment management, benefits transactions and other joint ventures. It is currently flaunting a shareholder base of 1.3 million spread over 50 countries all over the world. Employees from diverse backgrounds and cultural heritage are a part of this respected company. It encompasses workers from Canada, Germany, Austria, Hong Kong, Ireland, and mainland china. With approximately 8500 employees, standard life is a fast growing venture with potential and capability to structure economies. The company’s motto is to provide an efficient service out of the hand-picked employees',
    para2:
      "It retained all its former workers just before initiating a new and modified concept of recruiting and development. It has invested in Oracle Human Capital Management institutions as a follow up to its initial goals ('Human Resource Management')",
    para3:
      'Its main motive is to prioritize strategic business ideas and thus implementing cost effective solutions. The company also paved the way for a new recruitment and development software named Oracle cloud-based talent management to exemplify the next generation of employees from every possible region all over the globe.',
    summary:
      'The annual savings of the company are a staggering 5.2 million per annum due to its rate of investment percentage being 32% along a span of five years. It has invested in Oracle HR solutions which develops the company’s HR scenario and strategizes it to entrust its employees according to the long term goals and specific needs of the business.',
    img1: projectImg1,
    img2: projectImg2,
  },
  {
    id: 3,
    banner: ssbg,
    title: 'Project Details',
    heading: 'One of our best product that makes us stand out',
    subHeading:
      'Public, Software, Authority, Management, Certification, Government, Information, Security',
    card: {
      client: 'Bassey Smir',
      categories: 'Security',
      date: '19 December 2016',
      tags: 'Authority, System, Softwares',
      img: ss,
    },
    para1:
      'The public key infrastructure (PKI) sets up and upholds dependable networking environment by offering key and certificate management services that permits encryption together with digital signature facilities for many applications. The services are permitted in such a way that it is transparent and usable. The user authentication employs the PKI technology of the password in the electronic bidding system.',
    para2:
      'In considering the password based PKI technology, given that protection is carried out by means of password which is simpler for the user to memorize the private key it brings about another issue of password exposure',
    para3:
      'The fingerprint information can also be employed. In this case, the user authentication in which the security is strengthened as compared to other existing authentication technology can be done. As a result, the finger print information and the certificate can be stored in the finger print security token',
    summary:
      'As at present, public key infrastructure is employed for the exchange of public keys. This is defined by International Telecommunication Union and Telegraph (ITU-T) standard X.509. In this case, a user or node publishes its public key on a key server of some sort from which it can be downloaded by other peers after when the encrypted and signed messages can be exchanged. This requires every participating node to trust the key server within the PKI. The certificate revocation list (CRL) is used for the keeping of invalid keys and certificates.',
    img1: projectImgq,
    img2: projectImgf,
  },
  {
    id: 4,
    banner: oopbg,
    title: 'Project Details',
    heading: 'One of our best product that makes us stand out',
    subHeading:
      'System, Banking, Design, Development, Software, Polymorphism, Inheritance, Behavior.',
    card: {
      client: 'Gabriel Smith',
      categories: 'Development',
      date: '2 July 2021',
      tags: 'System, Banking, Design',
      img: oop,
    },
    para1:
      'Systems development is an important part of solving a business problem. It is important to understand the problem that is being solved and have ways in which the solution will follow the principles and procedures for the solution process. If there is no due diligence in the development of an information system that will solve a given problem, it will mean that there will be problems with the alignment with the business.',
    para2:
      'The solution will not align well with the system and there will be issues and problems that will arise with the development of the system. There is a need to ensure that there is better understanding of the requirements of the system and the solution it will offer to the business',
    para3:
      'This paper will focus on software design analysis for a banking institution that will manage the banking processes. It is designed to show the ways in which the banking process will be carried out in the design of computer-based system. The paper will then focus on the development and assessment of the banking system',
    summary:
      'In the project, there are objects and classes which will be integrated in the design of the system. Objects are the basic units from which object oriented programming is based. There are many issues and components that are used in the development of object oriented programming. Objects are important components in programing because they allow the programmers to relate real-world objects into programing environment.',
    img1: projectImg1,
    img2: projectImg2,
  },
  {
    id: 5,
    banner: rmbanner,
    title: 'Project Details',
    heading: 'One of our product that makes us stand out',
    subHeading:
      'Computers, Software, Windows, Internet, Workplace, Laptop, Mobility, Office',
    card: {
      client: 'Constance Robert',
      categories: 'Software',
      date: '1 April 2020',
      tags: 'Windows, Internet, Workplace',
      img: rm,
    },
    para1:
      'Widget Wonders require wireless internet connection for access of company resources by sales department staff. Software applications such as word processors, spreadsheet and internet will be required by manufacturing department. The graphics and computer aided design (CAD) software are also needed by research and development department while MIS department will require extra processor and memory to support administrative tasks. Other requirements include the most appropriate operating system that can support all the departments and system security software.',
    para2:
      'Microsoft office software will be needed to provide word processing, excel spreadsheet for manufacturing department. Microsoft office will also provide ms outlook for internet access within manufacturing department. The same Microsoft office will provide PowerPoint presentation software for the sales department so that they can make presentations at sales meeting and conferences (Collins 2013)',
    para3:
      'Because of their high number, the sales department staff will need laptop computers with Bluetooth and Wi-Fi software features to enable every employee to access wireless network. The laptops will also enhance their mobility',
    summary:
      'The recommendations given above are based on the minimum required specifications. The recommendations will also last for three years given that new software technology upgrade do come to the market within the time frame of 2 to 3 years. The company will therefore be in a position to use the recommended software until the fresh ones are introduced to the market in approximately three years time after when it can decide to go for new purchase or upgrade. The change of technology will call for the company to embrace for change as accompany which applies advanced technologies to enhance its competitive position',
    img1: projectImg1,
    img2: projectImg2,
  },
  {
    id: 6,
    banner: hrmedbg,
    title: 'Project Details',
    heading: 'One of your best product become more stand out',
    subHeading:
      'Expanded Implementation Of The Existing Electronic Health Records (Ehr) System To Non-Medical Areas: Barriers And Options Case Studies Examples',
    card: {
      client: 'Paula Ramsey',
      categories: 'Interior',
      date: '23 September 2020',
      tags: 'branding, vintage, creative',
      img: hrmed,
    },
    para1:
      'Despite the risks and limitations, interoperable Electronic Health Record (HER) system continues to attract organizational interests due to its promise of process efficiency, permanence of health records, patient privacy, and secure operational environment (McGinn, et al., 2011). These characteristics had positive impact to the organizational profitability and, in the Medical Center, redound positively to employee benefits and development.',
    para2:
      'Expanding the implementation coverage of the EHR system to the Center’s entire medical system, to cover the non-hospital care units (e.g. pharmacies, coordinated care, etc.)',
    para3:
      'normally presumes a thorough testing of the existing EHR system in the medical areas and much of the initial implementation issues adequately addressed, if not fully resolved.',
    summary:
      'The following steps are patterned and modified from the recommendations of the U.S. Health and Human Services (2014). For instance, the numbers of steps are more (7 instead of 6) than what can be found in the USHHS outline.Step 1: Assessing the current practice: The current medical practice is assessed in areas such as level of administrative processes (in terms of organization, efficiency and documentation quality); clinical workflow (in terms of efficiency, high organization, and staff knowledge); data collection and reporting status (in terms of efficiency); staff computer literacy (level of knowledge, skill and comfort); access to high-speed internet connectivity; access to adequate financial capital; congruence with clinical priorities; and the presence of specific specialty requirements. Although most of these areas had been assessed during the first implementation of the existing EHR system, going through the process is beneficial in assessing the state of medical practice to detect weaknesses that should be corrected when expanding to the non-medical areas. New visioning and goal-setting are usually unnecessary. The same implementation leadership team will oversee the expansion.',
    img1: projectImg1,
    img2: projectImg2,
  },
];
export default fakeData;