import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

const SampleShadCnUi = () => {
  return (
    <div className="p-2">
      <h3 className="mb-4 text-lg font-bold">Shadcn UI components</h3>
      <Button className="mb-4">Button</Button>
      <Slider className="mb-4" defaultValue={[33]} max={100} step={1} />
      <RadioGroup className="mb-4" defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SampleShadCnUi;
