import Heading from '@atoms/Heading';
import Text from '@atoms/Text';
import Button from '@atoms/Button';

export default function CodePage() {
    const handleButtonClick = () => {
        alert('Feature coming soon!');
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <Heading level={1} className="mb-4">
                Work in Progress
            </Heading>
            <Text className="mb-6 text-center">
                I am currently working to bring you this feature. Stay tuned for more updates!
            </Text>
            <Button onClick={handleButtonClick}>
                Notify Me
            </Button>

        </div>
    );
}