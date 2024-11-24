import React, { useState } from "react";
import * as FeatherIcon from 'react-feather';

const IconPicker = ({
  rowsInOnePage = 5,
  columnsInOnePage = 7,
  iconHeight = 24,
  iconWidth = 24,
  pickerHeight = 500,
  pickerWidth = 500,
  onSelect,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const iconList = Object.keys(FeatherIcon).filter(
    (key) => key !== "createReactComponent"
  );

  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(iconList.length / iconsPerPage);

  const startIndex = (currentPage - 1) * iconsPerPage;
  const endIndex = startIndex + iconsPerPage;
  const currentIcons = iconList.slice(startIndex, endIndex);

  const handleIconSelect = (iconName) => {
    onSelect(iconName);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-lg p-4"
        style={{ width: pickerWidth, height: pickerHeight }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Select App Icon</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FeatherIcon.X size={20} />
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              <FeatherIcon.ChevronLeft size={20} />
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              <FeatherIcon.ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          className="grid gap-4 overflow-y-auto"
          style={{
            gridTemplateColumns: `repeat(${columnsInOnePage}, minmax(0, 1fr))`,
            height: pickerHeight - 140,
          }}
        >
          {currentIcons.map((iconName) => (
            <button
              key={iconName}
              onClick={() => handleIconSelect(iconName)}
              className="p-3 rounded-lg hover:bg-blue-50 flex items-center justify-center transition-colors"
            >
              {React.createElement(FeatherIcon[iconName], {
                size: Math.min(iconWidth, iconHeight),
                className: "text-gray-700",
              })}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconPicker;
