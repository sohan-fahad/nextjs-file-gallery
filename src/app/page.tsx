"use client";

import fs from "fs/promises";
import path from "path";
import HomePage from "@/presentation/view/HomePage/HomePage";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="p-4">
      <HomePage />
    </main>
  );
}

export const getData = async () => {
  try {
    const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"));
    console.log("🚀 ~ file: page.tsx:29 ~ getData ~ dirs:", dirs);
    return dirs;
  } catch (error) {
    console.log(error);
  }
};
