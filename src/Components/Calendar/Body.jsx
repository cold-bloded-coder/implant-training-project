import React, { useEffect } from "react";

export const Body = () => {
  return (
    <>
      <div className="flex items-center justify-center px-4 my-4">
        <div className="2xl:w-1/3 xl:w-1/2 lg:w-3/5 sm:w-[90vw] w-full drop-shadow-[0_0_7px_rgba(0,0,0,0.25)]">
          <div className="md:p-16 md:pb-12 dark:bg-white rounded-2xl">
            <div className="flex items-center justify-between pt-5 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[17px] font-light text-center dark:text-gray-800">
                          Mo
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[17px] font-light text-center dark:text-gray-800">
                          Tu
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[17px] font-light text-center dark:text-gray-800">
                          We
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[17px] font-light text-center dark:text-gray-800">
                          Th
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[17px] font-light text-center dark:text-gray-800">
                          Fr
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[17px] font-light text-center dark:text-gray-800">
                          Sa
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[17px] font-light text-center dark:text-gray-800">
                          Su
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pt-1">
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td className="pt-1">
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td className="pt-1">
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          1
                        </p>
                      </div>
                    </td>
                    <td className="pt-1">
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          2
                        </p>
                      </div>
                    </td>
                    <td className="pt-1">
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800">
                          3
                        </p>
                      </div>
                    </td>
                    <td className="pt-1">
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800">
                          4
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          5
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          6
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          7
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="w-full h-full">
                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                          <p className="text-[17px] font-bold w-9 h-9 flex items-center justify-center   text-white bg-gradient-to-r from-[#3C58BC] to-[#768FEA] rounded-full">
                            8
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          9
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800">
                          10
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800">
                          11
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          12
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          13
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          14
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          15
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          16
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800">
                          17
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800">
                          18
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          19
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          20
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          21
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          22
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          23
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="w-full h-full">
                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                          <p className="text-[17px] font-bold w-9 h-9 flex items-center justify-center   text-white bg-gradient-to-r from-[#3C58BC] to-[#768FEA] rounded-full">
                            24
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800">
                          25
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          26
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          27
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          28
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          29
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="px-4 py-2.5 cursor-pointer flex w-full justify-center">
                        <p className="text-[17px] font-bold text-gray-500 dark:text-gray-800  ">
                          30
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
