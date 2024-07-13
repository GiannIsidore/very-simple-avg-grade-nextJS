"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Component() {
  const [english, setEnglish] = useState("");
  const [math, setMath] = useState("");
  const [filipino, setFilipino] = useState("");
  const [pe, setPE] = useState("");
  const [average, setAverage] = useState("");
  const [remarks, setRemarks] = useState("");
  const [colorGrade, setColorGrade] = useState("");

  const calculate = () => {
    const total =
      parseInt(english) + parseInt(math) + parseInt(filipino) + parseInt(pe);
    const average = total / 4;
    setAverage(average);
    if (average >= 75) {
      setColorGrade("text-green-500");
      setRemarks("/assets/happy.png");
    } else {
      setColorGrade("text-red-500");
      setRemarks("/assets/sad.jpg");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Grade Calculator</CardTitle>
        <CardDescription>
          Enter your grades to get the average and remarks.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="english">English</Label>
            <Input
              type="text"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="math">Math</Label>
            <Input
              type="text"
              value={math}
              onChange={(e) => setMath(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="filipino">Filipino</Label>
            <Input
              type="text"
              value={filipino}
              onChange={(e) => setFilipino(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pe">PE</Label>
            <Input
              type="text"
              value={pe}
              onChange={(e) => setPE(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-lg">
            <Label htmlFor="average" className="text-lg">
              Average:{" "}
            </Label>

            <p className={colorGrade}>{average}</p>
          </div>
          <div className="flex items-center">
            <Label htmlFor="remarks" className="text-lg">
              Remarks:
            </Label>

            <Image src={`${remarks}`} alt="rems" width={40} height={40} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={calculate} className="hover:scale-150 transition-all">
          Calculate
        </Button>
      </CardFooter>
    </Card>
  );
}
