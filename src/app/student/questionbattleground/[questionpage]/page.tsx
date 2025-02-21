import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LuGitGraph } from "react-icons/lu";
import React from "react";

const Page = async ({
  params,
}: React.PropsWithChildren<{ params: { questionpage: string } }>) => {
  const { questionpage } = await params;
  console.log(questionpage);

  const apiCheckObject = {
    chapterSlug: "structure-of-atom",
    chapterTitle: "Structure of Atom",
    chapterInsightBadges: {
      difficulty: "Difficult",
      weightage: "Medium weightage",
      lengthOfChapter: "Time demanding",
    },
    questionsYearWise: [
      {
        year: 2025,
        key: 1,
        questions: [
          {
            questionNumber: 0,
            questionDescription:
              "In a multielectron atom, which of the following orbitals described by three quantum numbers will have the same energy in the absence of electric and magnetic fields?",
            attachableImages: "/images/rotatory.png",
            options: [{ optionA: 4, optionB: 5, optionC: 2, optionD: 1 }],
            correctOption: 3,
          },
        ],
      },
      {
        year: 2024,
        key: 2,
        questions: [
          {
            questionNumber: 1,
            questionDescription:
              "In a multielectron atom, which of the following orbitals described by three quantum numbers will have the same energy in the absence of electric and magnetic fields?",
            attachableImages: null,
            options: [{ optionA: 4, optionB: 5, optionC: 2, optionD: 1 }],
            correctOption: 3,
          },
        ],
      },
    ],
  };

  if (apiCheckObject.chapterSlug === questionpage) {
    return (
      <main className="px-4 md:px-6 lg:px-8">
        <section className="flex flex-col lg:flex-row justify-between items-center relative mt-4">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-4xl font-bold">
              {apiCheckObject.chapterTitle}
            </h1>
            <div className="mt-2 gap-2 flex flex-wrap">
              <Badge variant="destructive">
                {apiCheckObject.chapterInsightBadges.difficulty}
              </Badge>
              <Badge variant="secondary">
                {apiCheckObject.chapterInsightBadges.weightage}
              </Badge>
              <Badge variant="outline">
                {apiCheckObject.chapterInsightBadges.lengthOfChapter}
              </Badge>
            </div>
          </div>
          <Button className="font-medium mt-4 lg:mt-0" size="sm">
            <LuGitGraph /> View Analytics
          </Button>
        </section>

        <section className="mt-12 w-full">
          {apiCheckObject.questionsYearWise &&
            apiCheckObject.questionsYearWise.map((items) => (
              <div key={items.key || items.year} className="mb-8">
                <Badge className="my-4">{items.year}</Badge>
                {items.questions &&
                  items.questions.map((item, index) => {
                    if (!item || !item.questionDescription) return null;

                    return (
                      <div
                        key={item.questionNumber || `question-${index}`}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6"
                      >
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                          <p className="text-lg">{item.questionDescription}</p>
                          <div className="mt-2">
                            {item.options.map((optionItem, optionIndex) => (
                              <Card
                                key={optionIndex}
                                className="flex flex-row flex-2   gap-4 mb-2 p-4 border rounded-lg"
                              >
                                <button className="flex-1">{`A: ${optionItem.optionA}`}</button>
                                <button className="flex-1">{`B: ${optionItem.optionB}`}</button>
                                <button className="flex-1">{`C: ${optionItem.optionC}`}</button>
                                <button className="flex-1">{`D: ${optionItem.optionD}`}</button>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                          {item.attachableImages &&
                            item.attachableImages.toString() && (
                              <img
                                className="rounded-xl w-full h-auto"
                                src={item.attachableImages.toString()}
                                alt="Question related image"
                              />
                            )}
                        </div>

                        <div className="col-span-1 lg:col-span-1">
                          <h1 className="text-lg font-bold">Analysis</h1>
                          <div className="mt-2">
                            {/* You can include analysis content here */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ))}
        </section>
      </main>
    );
  }

  return null; // In case the page doesn't match, render nothing
};

export default Page;
