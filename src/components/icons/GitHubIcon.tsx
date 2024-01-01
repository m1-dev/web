import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';

type IconProps = {
  url: string;
};

const GitHubIcon = (props: IconProps) => {
  return (
    <div>
      <Button variant="link">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <BsGithub className="w-8 h-8" />
        </a>
      </Button>
    </div>
  );
};

export default GitHubIcon;
