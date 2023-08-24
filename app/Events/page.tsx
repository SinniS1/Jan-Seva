import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      /* table */
      <div className=" flex ">
        <div className="p-[20vh] w-2/3 ">
          <Table>
            <TableCaption className="font-md text-lg">
              List of all our Events
            </TableCaption>
            <TableHeader>
              <TableRow className="w-[100px] ">
                <TableHead>Date</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Organiser</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            {/* todos */}

            {/* 1. Make a seperate table body caliing function */}
            {/* 2. MAke if satements in those as well with accordance to the images and date must get feed automatically */}

            <TableBody className="cursor-pointer">
              <TableRow>
                <TableCell className="font-medium">24/08/2023</TableCell>
                <TableCell>Bhoomi Pujan of Delhi branch</TableCell>
                <TableCell>Amit Grewal</TableCell>
                <TableCell className="text-green-600 font-semibold">
                  Upcoming
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">23/08/2023</TableCell>
                <TableCell>Pujan Booths and Cultural Showcase</TableCell>
                <TableCell>Rituraj</TableCell>
                <TableCell className="text-red-600 font-semibold">
                  Expired
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">23/08/2023</TableCell>
                <TableCell>Party Members Pujan Celebration</TableCell>
                <TableCell>Sachin</TableCell>
                <TableCell className="text-red-600 font-semibold">
                  Expired
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">23/08/2023</TableCell>
                <TableCell>Dance Extravaganza - "Harmony in Motion"</TableCell>
                <TableCell>Abhishek</TableCell>
                <TableCell className="text-green-600 font-semibold">
                  Upcoming
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">23/08/2023</TableCell>
                <TableCell> Unity Parade</TableCell>
                <TableCell>Dheeraj</TableCell>
                <TableCell className="text-green-600 font-semibold">
                  Upcoming
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className=" p-[20vh] w-1/3 ">
          <div className="grid gap-2 ">
            <Skeleton className="w-[300px] h-[200px] mb-3 rounded-md" />
            <Skeleton className="w-[200px] h-[20px] rounded-full" />
            <Skeleton className="w-[100px] h-[20px]  mb-3 rounded-full" />
            <Skeleton className="w-full h-[15px] rounded-full" />{" "}
            <Skeleton className="w-full h-[15px] rounded-full" />{" "}
            <Skeleton className="w-full h-[15px] rounded-full" />{" "}
            <Skeleton className="w-full h-[15px] rounded-full" />{" "}
          </div>
        </div>
        {/* skeleton */}
      </div>
      <Footer />
    </div>
  );
};

export default page;
