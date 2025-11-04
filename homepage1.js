import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldAlert, Hospital, Flame, Building } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col gap-8">
      {/* Emergency Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg rounded-2xl border-red-400 border-2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-red-600 mb-4 flex items-center gap-2">
              <ShieldAlert className="text-red-600" /> Emergency
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white text-lg py-6 rounded-xl">
                <Hospital className="mr-2" /> Hospital
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 rounded-xl">
                <Flame className="mr-2" /> Fire Brigade
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl">
                <ShieldAlert className="mr-2" /> Police
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Non-Emergency Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="shadow-lg rounded-2xl border-green-400 border-2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-green-600 mb-4 flex items-center gap-2">
              <Building className="text-green-600" /> Non Emergency
            </h2>
            <Button className="bg-green-500 hover:bg-green-600 text-white text-lg py-6 w-full sm:w-auto rounded-xl">
              Municipality
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
