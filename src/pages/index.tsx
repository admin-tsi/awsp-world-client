import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/user-context';
export default function Index() {
  const { hello } = useAppContext();
  return (
    <div>
      <Button>{hello}Click me</Button>
    </div>
  );
}
