import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Welcome to Your Bare-Bones App</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6">Start building your application by modifying this page.</p>
          <Button className="w-full">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;