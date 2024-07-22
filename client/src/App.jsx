import "./App.css";

import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="max-w-4xl py-10 space-y-4 mx-auto">
      <h2 className="text-6xl font-display font-semibold">
        Hiring have never been easier, automate your hiring workflow.
      </h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        dapibus leo. Curabitur nec pharetra nunc. Donec euismod, quam ac
        consectetur tincidunt, nisl mi posuere nunc, vel tristique purus diam
        eget purus. Nulla facilisi. Nullam ac erat. Donec a ipsum. Nulla
        facilisi. Nullam ac erat. Donec a ipsum.
      </p>
      <Button>Start hiring talent</Button>
    </div>
  );
}

export default App;
