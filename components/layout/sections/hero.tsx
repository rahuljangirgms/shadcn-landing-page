import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import Magnetic from '@/components/layout/Animation/common//Magnetic';

import Rounded from '@/components/layout/Animation/common/RoundedButton';


// import AnimatedButton from "../Animation/Button";

import AnimatedButton from "@/components/layout/Animation/common/button";


export const Hero = () => (
  <div className="w-full py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              This is the start of something!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            <Button size="lg" className="gap-4" variant="secondary">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            <Magnetic>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
            </Magnetic>

            <Rounded>
              <p className="circle">More work</p>
            </Rounded>

            
              <AnimatedButton
                text="Click Me!"
               
                variant="primary"  // Should match a variant defined in your CSS (e.g., primary, outline)
                size="lg"          // Should match a size defined in your CSS (e.g., sm, md, lg)
                extraClassName="my-custom-class" // Optional extra class names if needed
              />
        

            {/* <div>
              <AnimatedButton
                text="Join Now!"
                hoverAnimation={{ duration: 0.4, scale: 1.08, ease: "power2.out" }}
                clickAnimation={{ duration: 0.25, scale: 1.2, yoyo: true, repeat: 1 }}
                scrambleDuration={0.8}
                scrambleCharsEnter="123"
                scrambleCharsLeave="123"
              />


            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square"></div>
          <div className="bg-muted rounded-md row-span-2"></div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  </div>
);