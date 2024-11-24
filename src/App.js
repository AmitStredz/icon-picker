import React, { useState } from 'react';
import * as FeatherIcon from 'react-feather';

import IconPicker from './components/IconPicker';

// IconPickerButton Component
const IconPickerButton = ({ selectedIcon, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="w-24 h-24 border-2 border-blue-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors"
    >
      {selectedIcon ? 
        React.createElement(FeatherIcon[selectedIcon], { size: 32 }) : 
        <span className="text-gray-400">Select Icon</span>
      }
    </div>
  );
};

const App = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <div className="flex justify-center items-center  w-screen h-screen bg-gray-100 p-8">
      <div className="flex flex-col justify-center items-center max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Icon Picker Demo</h1>
        
        <IconPickerButton 
          selectedIcon={selectedIcon}
          onClick={() => setShowPicker(true)}
        />

        {showPicker && (
          <IconPicker
            rowsInOnePage={5}
            columnsInOnePage={7}
            iconHeight={24}
            iconWidth={24}
            pickerHeight={500}
            pickerWidth={500}
            onSelect={setSelectedIcon}
            onClose={() => setShowPicker(false)}
          />
        )}
      </div>
    </div>
  );
};

export default App;