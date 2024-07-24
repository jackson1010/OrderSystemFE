import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CompletionCardProps {
  message: string;
}

const CompletionCard: React.FC<CompletionCardProps> = ({ message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Card className="max-w-sm mx-auto">
        <CardHeader>
        </CardHeader>
        <CardContent>
          <p className="text-center">{message}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompletionCard;
