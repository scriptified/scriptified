import dynamic from 'next/dynamic';
import Talk from '../interfaces/talk';
import Text from './common/Text';
import Tags from './common/Tags';

// TODO: Create a loading indicator for this
const ReactPlayer = dynamic(() => import('react-player/lazy'), { loading: (): JSX.Element => <p>Loading...</p> });

const TechTalk = ({ techTalk }: { techTalk: Talk }): JSX.Element => {
  return (
    <div className="my-8">
      <Text type="h2" additionalStyles="mb-4">
        {techTalk.title}
      </Text>
      <ReactPlayer url={techTalk.talkURL} controls={true} pip={true} />
      <Text additionalStyles="mt-4">{techTalk.desc}</Text>
      <Tags tags={techTalk.tags} />
    </div>
  );
};

export default TechTalk;