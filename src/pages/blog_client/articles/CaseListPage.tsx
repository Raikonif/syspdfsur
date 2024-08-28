import React, { useContext, useState } from "react";
import { BookOpen, Menu, X, Search, Filter, ChevronDown } from "lucide-react";
import { CASES, CYTOLOGY, HISTOPATHOLOGY, PAP } from "~/constants";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import Header from "~/pages/blog_client/sections/Header";

const cases = [
  {
    id: 1,
    title: "Data Breach Investigation",
    category: "Cybersecurity",
    status: "Open",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Corporate Fraud Analysis",
    category: "Financial Crime",
    status: "Closed",
    date: "2023-04-22",
  },
  {
    id: 3,
    title: "Intellectual Property Theft",
    category: "Corporate Espionage",
    status: "Open",
    date: "2023-06-01",
  },
  {
    id: 4,
    title: "Money Laundering Detection",
    category: "Financial Crime",
    status: "In Progress",
    date: "2023-05-10",
  },
  {
    id: 5,
    title: "Insider Trading Investigation",
    category: "Financial Crime",
    status: "Open",
    date: "2023-06-05",
  },
  {
    id: 6,
    title: "Ransomware Attack Analysis",
    category: "Cybersecurity",
    status: "Closed",
    date: "2023-03-18",
  },
  {
    id: 7,
    title: "Supply Chain Disruption",
    category: "Corporate Espionage",
    status: "In Progress",
    date: "2023-05-28",
  },
  {
    id: 8,
    title: "Phishing Campaign Investigation",
    category: "Cybersecurity",
    status: "Open",
    date: "2023-06-10",
  },
];

const categories = ["Todos", HISTOPATHOLOGY, CYTOLOGY, PAP];

function CaseListPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const { cases, handleClickOption } = useContext(ClientContext);

  const filteredCases = cases.data.filter(
    (caseItem) =>
      (selectedCategory === "Todos" || caseItem.type === selectedCategory) &&
      (caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.type.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="flex min-h-screen flex-col bg-purple-950 text-white">
      <Header />
      <main className="flex-1 pt-16">
        <section className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-3xl font-bold tracking-tighter text-yellow-400 sm:text-4xl md:text-5xl lg:text-6xl">
            Lista de Casos
          </h1>
          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Buscar Casos..."
                className="w-full rounded-md bg-purple-900 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <select
                  className="appearance-none rounded-md bg-purple-900 py-2 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              {/*<div className="relative">*/}
              {/*  <select*/}
              {/*    className="appearance-none rounded-md bg-purple-900 py-2 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"*/}
              {/*    value={selectedStatus}*/}
              {/*    onChange={(e) => setSelectedStatus(e.target.value)}*/}
              {/*  >*/}
              {/*    {statuses.map((status) => (*/}
              {/*      <option key={status} value={status}>*/}
              {/*        {status}*/}
              {/*      </option>*/}
              {/*    ))}*/}
              {/*  </select>*/}
              {/*  <ChevronDown className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400" />*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="cursor-pointer overflow-hidden rounded-lg bg-purple-900 shadow-lg transition-shadow hover:shadow-xl"
                onClick={() => handleClickOption(`${CASES}/${caseItem.id}`)}
              >
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{caseItem.title}</h3>
                  <p className="mb-4 text-gray-300">Category: {caseItem.type}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-2 py-1 text-sm font-semibold ${
                        caseItem.type === HISTOPATHOLOGY
                          ? "bg-green-500 text-green-900"
                          : caseItem.type === CYTOLOGY
                          ? "bg-yellow-500 text-yellow-900"
                          : "bg-red-500 text-red-900"
                      }`}
                    >
                      {caseItem.type}
                    </span>
                    <span className="text-sm text-gray-400">{caseItem.created_at}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-purple-800 bg-purple-950 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-400">
              © 2023 Case Management System. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <a
                className="text-xs text-gray-400 underline-offset-4 hover:text-gray-200 hover:underline"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-xs text-gray-400 underline-offset-4 hover:text-gray-200 hover:underline"
                href="#"
              >
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CaseListPage;
