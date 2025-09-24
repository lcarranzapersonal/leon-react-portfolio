import React from "react";
import { useState } from "react";
import { Card } from "./pages/card.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

//links
import Scene1 from "./components/Scene1.jsx";
import Longboard from "./components/Longboard.jsx";

//previews
import truchetPreview from "./assets/previews/preview-500x250px.png";
import telechairster from "./assets/previews/telechairster_250x500px.png";
import dwellciPreview from "./assets/previews/dwellci_preview_2k.png";
import architecturePreview from "./assets/previews/architecture_250x500px.png";
import portraitPreview from "./assets/previews/portrait_250x500px.png";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const [ref, isVisible] = useInView({
    threshold: 1.0,
    once: true,
  });

  const transition = {
    duration: 1.5,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-items-center min-h-screen px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="xs:h-100 sm:h-25 w-100 items-center"
        initial={{ y: -1000 }}
        animate={{ y: -10 }}
        exit={{ opacity: 0 }}
        transition={transition}
      >
        <Scene1 className=""></Scene1>
      </motion.div>

      <br></br>
      <br></br>
      <div className="flex flex-col items-center sm:scale-100 md:scale-85 lg:scale-60 scale-100">
        <div className="flex flex-col items-center">
          <ul className="">
            <li>
              <ul className="flex flex-col lg:flex-row">
                {/* entry */}
                <li>
                  <Link className="" to="/About">
                    <Card
                      title="About Me"
                      cardImg={portraitPreview}
                      date=""
                      listItems={[]}
                      content={
                        <div>
                          <button
                            className="w-full"
                            onClick={() => setIsOpen(true)}
                          >
                            Open dialog
                          </button>
                          <Dialog
                            open={isOpen}
                            onClose={() => setIsOpen(false)}
                            className={`${
                              isOpen
                                ? "bg-gray/30 relative z-50"
                                : "w-screen sm:max-w-md md:max-w-3xl px-8"
                            } transition-all duration-1000 ease-in-out mx-auto`}

                            // "bg-gray/30 relative z-50"
                          >
                            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                              <DialogPanel className="relative w-screen h-screen space-y-4 backdrop-blur-2xl p-12">
                                <DialogTitle className="z-100 absolute absolute top-1/16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">
                                  <div className=" flex gap-4">
                                    <button
                                      className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-3xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      Back
                                    </button>
                                  </div>
                                </DialogTitle>
                                <Scene1 className="flex-1 w-screen h-screen drop-shadow-2xl" />
                              </DialogPanel>
                            </div>
                          </Dialog>
                        </div>
                      }
                    />
                  </Link>
                </li>
                {/* entry */}

                {/* entry */}
                <li>
                  <Link className="" to="/Fabrication">
                    <Card
                      title="Fabrication"
                      cardImg={telechairster}
                      date=""
                      listItems={[]}
                      content={
                        <div>
                          <button
                            className="w-full"
                            onClick={() => setIsOpen(true)}
                          >
                            Open dialog
                          </button>
                          <Dialog
                            open={isOpen}
                            onClose={() => setIsOpen(false)}
                            className={`${
                              isOpen
                                ? "bg-gray/30 relative z-50"
                                : "w-screen sm:max-w-md md:max-w-3xl px-8"
                            } transition-all duration-1000 ease-in-out mx-auto`}

                            // "bg-gray/30 relative z-50"
                          >
                            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                              <DialogPanel className="relative w-screen h-screen space-y-4 backdrop-blur-2xl p-12">
                                <DialogTitle className="z-100 absolute absolute top-1/16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">
                                  <div className=" flex gap-4">
                                    <button
                                      className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-3xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      Back
                                    </button>
                                  </div>
                                </DialogTitle>
                                <Scene1 className="flex-1 w-screen h-screen drop-shadow-2xl" />
                              </DialogPanel>
                            </div>
                          </Dialog>
                        </div>
                      }
                    />
                  </Link>
                </li>
                {/* entry */}
              </ul>

              <ul className="flex flex-col lg:flex-row">
                {/* entry */}
                <li>
                  <Link className="" to="/Architecture">
                    <Card
                      title="Architecture"
                      cardImg={architecturePreview}
                      date=""
                      listItems={[]}
                      content={
                        <div>
                          <button
                            className="w-full"
                            onClick={() => setIsOpen(true)}
                          >
                            Open dialog
                          </button>
                          <Dialog
                            open={isOpen}
                            onClose={() => setIsOpen(false)}
                            className={`${
                              isOpen
                                ? "bg-gray/30 relative z-50"
                                : "w-screen sm:max-w-md md:max-w-3xl px-8"
                            } transition-all duration-1000 ease-in-out mx-auto`}

                            // "bg-gray/30 relative z-50"
                          >
                            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                              <DialogPanel className="relative w-screen h-screen space-y-4 backdrop-blur-2xl p-12">
                                <DialogTitle className="z-100 absolute absolute top-1/16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">
                                  <div className=" flex gap-4">
                                    <button
                                      className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-3xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      Back
                                    </button>
                                  </div>
                                </DialogTitle>
                                <Scene1 className="flex-1 w-screen h-screen drop-shadow-2xl" />
                              </DialogPanel>
                            </div>
                          </Dialog>
                        </div>
                      }
                    />
                  </Link>
                </li>
                {/* entry */}

                {/* entry */}
                <li>
                  <Link className="" to="/Multimedia">
                    <Card
                      title="Multimedia"
                      cardImg={truchetPreview}
                      date=""
                      listItems={[]}
                      content={
                        <div>
                          <button
                            className="w-full"
                            onClick={() => setIsOpen(true)}
                          >
                            Open dialog
                          </button>
                          <Dialog
                            open={isOpen}
                            onClose={() => setIsOpen(false)}
                            className={`${
                              isOpen
                                ? "bg-gray/30 relative z-50"
                                : "w-screen sm:max-w-md md:max-w-3xl px-8"
                            } transition-all duration-1000 ease-in-out mx-auto`}

                            // "bg-gray/30 relative z-50"
                          >
                            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                              <DialogPanel className="relative w-screen h-screen space-y-4 backdrop-blur-2xl p-12">
                                <DialogTitle className="z-100 absolute absolute top-1/16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">
                                  <div className=" flex gap-4">
                                    <button
                                      className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-2 text-black text-sm font-medium rounded-3xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      Back
                                    </button>
                                  </div>
                                </DialogTitle>
                                <Scene1 className="flex-1 w-screen h-screen drop-shadow-2xl" />
                              </DialogPanel>
                            </div>
                          </Dialog>
                        </div>
                      }
                    />
                  </Link>
                </li>
                {/* entry */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
