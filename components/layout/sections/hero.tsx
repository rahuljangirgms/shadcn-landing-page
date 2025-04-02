import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import Magnetic from "@/components/layout/Animation/common//Magnetic";

import Rounded from "@/components/layout/Animation/common/RoundedButton";

import DotPattern from "@/components/ui/dot-pattern-1";
// import AnimatedButton from "../Animation/Button";

import AnimatedButton from "@/components/layout/Animation/common/button";

export const Hero = () => (
  <div className="w-full py-20">
    <div className="container mx-auto w-full">
      <DotPattern width={3} height={3} />
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 items-start flex-col">

          <div className="relative flex flex-col items-center border border-violet-500">


            <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-violet-500 text-white" />
            <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-violet-500 text-white" />
            <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-violet-500 text-white" />
            <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-violet-500 text-white" />

            <div className="relative z-20 p-6">

              <div>
                <Badge variant="outline">We&apos;re live!</Badge>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl md:text-3xl max-w-xl tracking-tighter text-left font-semibold">
                  We Don't Just Build Software – We Build Partnerships.
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                  Running your business is already challenging. RAAS partners with you to simplify technology, automate processes, and scale your operations effortlessly. Together, let's build the future you envision.
                </p>
                <div className="mt-4">
                  <button className="bg-primary text-white px-6 py-2 rounded-md font-medium">
                    Let's Get Started
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* <div className="flex flex-row flex-wrap gap-4">
            <Magnetic>
              <Button size="lg" className="gap-4" variant="secondary">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" className="gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </Magnetic>

            <Rounded backgroundColor={"red"}>
              <p>Get in touch</p>
            </Rounded>

            <AnimatedButton
              text="Click Me!"
              variant="primary" // Should match a variant defined in your CSS (e.g., primary, outline)
              size="lg" // Should match a size defined in your CSS (e.g., sm, md, lg)
              extraClassName="my-custom-class" // Optional extra class names if needed
            />

           
          </div> */}
        </div>
       <div className="grid grid-cols-2 gap-8 perspective-1000">
  <div className="bg-muted rounded-md aspect-square shadow-xl transform hover:rotate-3 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"></div>
  <div className="bg-muted rounded-md row-span-2 shadow-xl transform hover:-rotate-3 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"></div>
  <div className="bg-muted rounded-md aspect-square shadow-xl transform hover:rotate-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"></div>
</div>

      </div>
    </div>
  </div>
);
