import { Circle, Ellipsis } from "lucide-react";

const TaskStatusOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-3 border ml-4 mb-4 justify-items-stretch">
      <div className="col-span-2 space-y-4 shadow-lg rounded-md max-w-xl">
        <h3 className="text-lg font-bold m-4">To-Do</h3>
        <div className=" bg-gray-50 rounded-lg p-4 flex gap-2 items-start max-w-lg m-4 justify-between">
          <div className="flex">
          <Circle className="stroke-red-500 inline-block mr-4" />
          <div>
            <h3 className="font-semibold">Attend Shubh's Birthday Party</h3>
            <p className="text-sm text-gray-600 flex-shrink-0">
              Buy gifts on the way and pick up cake from bakery.
            </p>
            <div className="flex">
              <p className="text-sm pr-2">Priority: </p>
              <p className="text-sm">High</p>
            </div>
          </div>
          </div>
          <Ellipsis className="flex-shrink-0"/>
        </div>
        <div className="flex bg-gray-50 rounded-lg p-4 gap-2 items-start max-w-lg m-4 justify-between">
          <Circle className="stroke-blue-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">
              Landing Page Design for TravelDays
            </h3>
            <p className="text-sm text-gray-600">
              Get the work done by EOD and discuss with client before leaving.
            </p>
            <div className="flex">
              <p className="text-sm pr-2">Priority: </p>
              <p className="text-sm">Medium</p>
            </div>
          </div>
          <Ellipsis className="flex-shrink-0"/>
        </div>
        <div className="flex bg-gray-50 rounded-lg p-4 gap-2 items-start max-w-lg m-4 justify-between">
          <Circle className="stroke-yellow-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Presentation on Final Product</h3>
            <p className="text-sm text-gray-600">
              Make sure everything is functioning and all the necessities are
              properly met. Prepare the team and get the documents ready for...
            </p>
            <div className="flex">
              <p className="text-sm pr-2">Priority: </p>
              <p className="text-sm">Medium</p>
            </div>
          </div>
          <Ellipsis className="flex-shrink-0"/>
        </div>
        </div>    
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg max-w-xl">
            <h2 className="text-lg font-semibold m-4">Task Status</h2>
            <div className="grid gird-cols-3 gap-4 mt-4 grid-flow-col">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                  <span className="font-bold">84%</span>
                </div>
                <p className="text-sm mt-2">Completed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center">
                  <span className="font-bold">46%</span>
                </div>
                <p className="text-sm mt-2">In Progress</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-4 border-red-600 flex items-center justify-center">
                  <span className="font-bold">13%</span>
                </div>
                <p className="text-sm mt-2">Not Started</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 space-y-2 shadow-lg">
            <h2 className="text-xl font-bold mt-8">Completed Task</h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 shadow-lg">
              <h3 className="font-semibold">Walk the dog</h3>
              <p className="text-sm text-gray-600">Take the dog to the park and bring treats as well</p>
              <p className="text-xs">Status : <span className="text-xs text-green-500">Completed</span></p>
              <p className="text-xs text-gray-500">Completed 2 days ago</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 shadow-lg mt-4">
              <h3 className="font-semibold">Conduct Meeting</h3>
              <p className="text-sm text-gray-600">Meet with the client and finalize requirements.</p>
              <p className="text-xs">Status : <span className="text-xs text-green-500">Completed</span></p>
              <p className="text-xs text-gray-500">Completed 2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default TaskStatusOverview;
