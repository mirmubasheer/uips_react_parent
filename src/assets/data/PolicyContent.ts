import { awardsImg } from '../../assets';

export interface PolicySection {
  title: string;
  content: string[];
  list?: string[];
  listType?: 'ordered' | 'unordered';
}

export interface PolicyData {
  sections: PolicySection[];
  image: {
    url: string;
    alt: string;
  };
}

export const policyData: PolicyData = {
  sections: [
    {
      title: 'UIPS Safety Policy',
      content: [
        'Safety and health in our company are a vital part of every operation. Without question, safety and health of all employees, contractors, vendors, and the environment is every employee’s responsibility. This responsibility is shared at all levels, from entry level to the executive level.',
        'We will maintain safety and health programs conforming to the best practices of our industry. To be successful, such programs must embody the proper attitudes toward injury and illness prevention on the part of department heads, managers, supervisors, and employees. It also requires cooperation in all safety and health matters, not only between management and employees, but also between employees and their co-workers. Only through such a cooperative effort can an effective safety and health program be established and preserved.',
      ],
    },
    {
      title: '',
      content: [
        'The safety and health of every employee is the highest priority. Management accepts responsibility for providing a safe working environment, and employees are expected to take responsibility for performing work in accordance with our safe standards and practices. Safety and health will only be achieved through teamwork. Everyone must join together in promoting safety and health and taking every reasonable measure to assure safe working conditions within the company and to the environment. We do believe that ZERO accidents, injuries, and spills/environmental releases are attainable.',
        'Safety is our first priority! While cost and quality service to the customer are part of our core business values, we will not compromise safety for their sake. Our core safety values are: bodily injury prevention, protection of others through self-awareness, and environmental cleanliness. We will support these values with the following principles:',
      ],
      list: [
        'All accidents are preventable and all hazards controllable.',
        'Working safely is a condition of employment.',
        'Safety is everyone’s responsibility.',
        'People will be trained to perform their jobs safely prior to being assigned the task.',
        'Each location will have an active Safety Management Plan equivalent to those for production and quality.',
        'Audits are essential for maintaining safety performance.',
      ],
      listType: 'unordered',
    },
    {
      title: 'Quality Policy Statement',
      content: [
        'It is the policy of Utilities & Industrial Power Services to always strive to provide the best service in terms of project-related contracting (Telecommunication, Electrical, Civil, Oil & Gas services) to maintain its leadership position in this business.',
        'It is our policy to:',
      ],
      list: [
        'Provide services of the highest possible standards to satisfy our customer needs, expectations of quality, safety, reliability, and service.',
        'Accomplish quality objectives by establishing, implementing, and maintaining a documented effective Quality Assurance System which complies with the requirements of ISO 9001.',
        'Timely delivery of services to meet our customer’s requirements.',
        'Ensure our employees are competent and properly trained so they are better able to serve our customers.',
        'Continuously improve our processes and systems.',
      ],
      listType: 'ordered',
    },
    {
      title: '',
      content: [
        'Our policy requires our employees to be aware of and contribute to the improvements of the quality management system.',
      ],
    },
  ],
  image: {
    url: awardsImg.award,
    alt: 'UIPS Safety and Quality Policy',
  },
};