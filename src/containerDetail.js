// import React, { useState } from 'react';

// const ContainerDetail = ({ onUpdate }) => {
//   const initialContainerDetails = {
//     size: '20ft',
//     type: 'General',
//     commodity: 'General',
//     weight: '18 MT',
//     count: 1,
//   };

//   const [containerDetails, setContainerDetails] = useState({ ...initialContainerDetails });
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleContainerDetails = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleApply = () => {
//     onUpdate(containerDetails); // Notify parent component about the updated details
//     setIsOpen(false); // Close container details after applying changes
//   };

//   return (
//     <div className="container-details">
//       <div className={`container-summary ${isOpen ? 'open' : ''}`} onClick={toggleContainerDetails}>
//         {containerDetails.count} x {containerDetails.size} / {containerDetails.type} {isOpen ? '∨' : '∧'}
//       </div>
//       {isOpen && (
//         <div className="details">
//           <div className="field">
//             <label>Size *</label>
//             <div>
//               <button onClick={() => setContainerDetails({ ...containerDetails, size: '20ft' })}>20ft</button>
//               <button onClick={() => setContainerDetails({ ...containerDetails, size: '40ft' })}>40ft</button>
//               <button onClick={() => setContainerDetails({ ...containerDetails, size: '40ft HC' })}>40ft HC</button>
//               <button onClick={() => setContainerDetails({ ...containerDetails, size: '45ft HC' })}>45ft HC</button>
//             </div>
//           </div>
//           <div className="field">
//             <label>Type *</label>
//             <div>
//               <button onClick={() => setContainerDetails({ ...containerDetails, type: 'General' })}>
//                 General
//               </button>
//               <button onClick={() => setContainerDetails({ ...containerDetails, type: 'Refrigerated (Reefer)' })}>
//                 Refrigerated (Reefer)
//               </button>
//               <button onClick={() => setContainerDetails({ ...containerDetails, type: 'Open Top' })}>Open Top</button>
//               <button onClick={() => setContainerDetails({ ...containerDetails, type: 'Flat Rack' })}>Flat Rack</button>
//               <button onClick={() => setContainerDetails({ ...containerDetails, type: 'ISO Tank' })}>ISO Tank</button>
//               <button onClick={() => setContainerDetails({ ...containerDetails, type: 'Open Side (One Door Open)' })}>
//                 Open Side (One Door Open)
//               </button>
//             </div>
//           </div>
//           <div className="field">
//             <label>Commodity *</label>
//             <select
//               onChange={(e) => setContainerDetails({ ...containerDetails, commodity: e.target.value })}
//               value={containerDetails.commodity}
//             >
//               <option value="General">General</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//           <div className="field">
//             <label>Total Weight per Ctr. *</label>
//             <input
//               type="number"
//               value={containerDetails.weight.replace(' MT', '')}
//               onChange={(e) => setContainerDetails({ ...containerDetails, weight: `${e.target.value} MT` })}
//             />{' '}
//             MT
//           </div>
//           <div className="field">
//             <label>Count *</label>
//             <input
//               type="number"
//               value={containerDetails.count}
//               onChange={(e) => setContainerDetails({ ...containerDetails, count: e.target.value })}
//             />
//           </div>
//           <button className="applyButton" onClick={handleApply}>
//             Apply
//           </button>
//           <button className="addButton">Add Another Container</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContainerDetail;








// import React, { useState } from 'react';
// import containerTypes from './path/to/container-types.json';
// import containerSizes from './path/to/container-size.json';
// import './ContainerDetail.css';

// const ContainerDetail = ({ onApply }) => {
//   const initialContainerDetails = {
//     size: '20ft',
//     type: 'General',
//     commodity: 'General',
//     weight: '18 MT',
//     count: 1,
//   };
//   const [containerDetails, setContainerDetails] = useState({ ...initialContainerDetails });
//   const [isOpen, setIsOpen] = useState(false);

//    const toggleDropdown = () => {
//     setIsOpen(!isOpen); // Toggle the value of isOpen between true and false
//   };
//    const handleApply = () => {
//     onApply(containerDetails);
//     setIsOpen(false);
//   };
//   return (
//     <div className="container-details">
//       <h2>Container Details</h2>
//       <div className="outer-rectangle">
//         <div className={`inner-rectangle ${isOpen ? 'open' : ''}`} onClick={toggleContainerDetails}>
//           <span>{containerDetails.count} x {containerDetails.size} | {containerDetails.type}| {containerDetails.commodity}</span>
//           <span className="toggle-icon">{isOpen ? '∨' : '∧'}</span>
//         </div>
//       </div>
      
//       </div>
//       );
// };
// // export default containerDetail;





// import React, { useState, useEffect  } from 'react';
// import containerTypes from './container-types.json';
// import containerSizes from './container-size.json';
// import './container.css';
// import { COMMODITY_NAME_MAPPING } from './commodities.js';

// const ContainerDetail = ({ onApply }) => {
//    console.log('COMMODITY_NAME_MAPPING:', COMMODITY_NAME_MAPPING);

//  const commodities = Object.keys(COMMODITY_NAME_MAPPING).map((key) => ({
//     label: COMMODITY_NAME_MAPPING[key].name,
//     value: key,
//   }));

//   const initialContainerDetails = {
//     size: containerSizes[0]?.label || 'Default Size',
//     type: containerTypes[0]?.label || 'Default Type',
//     commodity: commodities[0]?.label || 'Default Commodity', // Set default commodity
//     weight: '18 MT',
//     count: 1,
//   };

//   const [details, setDetails] = useState(initialContainerDetails);

//   useEffect(() => {
//     if (commodities.length === 0) {
//       console.warn('Commodities list is empty or key is incorrect.');
//     }
//   }, [commodities]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onApply(details);
//   };

//   return (
//     <div className="container-detail">
//       <h2>Container Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="size">Size</label>
//           <select name="size" id="size" value={details.size} onChange={handleChange}>
//             {containerSizes.map((size) => (
//               <option key={size.value} value={size.label}>
//                 {size.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="type">Type</label>
//           <select name="type" id="type" value={details.type} onChange={handleChange}>
//             {containerTypes.map((type) => (
//               <option key={type.value} value={type.label}>
//                 {type.label}
//               </option>
//             ))}
//           </select>
//         </div>
//          <div className="form-group">
//           <label htmlFor="commodity">Commodity</label>
//           <select name="commodity" id="commodity" value={details.commodity} onChange={handleChange}>
//             {commodities.map((commodity) => (
//               <option key={commodity.value} value={commodity.label}>
//                 {commodity.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="weight">Weight</label>
//           <input type="text" id="weight" name="weight" value={details.weight} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="count">Count</label>
//           <input type="number" id="count" name="count" value={details.count} onChange={handleChange} />
//         </div>
//         <button type="submit" className="apply-button">Apply Changes</button>
//       </form>
//     </div>
//   );
// };

// export default ContainerDetail;








// // import React, { useState, useEffect } from 'react';
// // import containerTypes from './container-types.json';
// // import containerSizes from './container-size.json';
// // import { COMMODITY_NAME_MAPPING } from './commodities.js';
// // import './container.css';

// // const ContainerDetail = ({ onApply }) => {
// //   // Verify the structure of COMMODITY_NAME_MAPPING
// //   console.log('COMMODITY_NAME_MAPPING:', COMMODITY_NAME_MAPPING);

// //   const commodities = Object.keys(COMMODITY_NAME_MAPPING).map((key) => ({
// //     label: COMMODITY_NAME_MAPPING[key].name,
// //     value: key,
// //   }));

// //   const initialContainerDetails = {
// //     size: containerSizes[0]?.label || 'Default Size',
// //     type: containerTypes[0]?.label || 'Default Type',
// //     commodity: commodities[0]?.label || 'Default Commodity', // Set default commodity
// //     weight: '18 MT',
// //     count: 1,
// //   };

// //   const [details, setDetails] = useState(initialContainerDetails);
// //   const [appliedDetails, setAppliedDetails] = useState(initialContainerDetails);

// //   useEffect(() => {
// //     if (commodities.length === 0) {
// //       console.warn('Commodities list is empty or key is incorrect.');
// //     }
// //   }, [commodities]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setAppliedDetails(details);
// //     onApply(details);
// //   };

// //   return (
// //     <div className="container-detail">
// //       <h2>Container Details</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label htmlFor="size">Size</label>
// //           <select name="size" id="size" value={details.size} onChange={handleChange}>
// //             {containerSizes.map((size) => (
// //               <option key={size.value} value={size.label}>
// //                 {size.label}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="type">Type</label>
// //           <select name="type" id="type" value={details.type} onChange={handleChange}>
// //             {containerTypes.map((type) => (
// //               <option key={type.value} value={type.label}>
// //                 {type.label}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="commodity">Commodity</label>
// //           <select name="commodity" id="commodity" value={details.commodity} onChange={handleChange}>
// //             {commodities.map((commodity) => (
// //               <option key={commodity.value} value={commodity.label}>
// //                 {commodity.label}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="weight">Weight</label>
// //           <input type="text" id="weight" name="weight" value={details.weight} onChange={handleChange} />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="count">Count</label>
// //           <input type="number" id="count" name="count" value={details.count} onChange={handleChange} />
// //         </div>
// //         <button type="submit" className="apply-button">Apply Changes</button>
// //       </form>
// //       <div className="applied-details-box">
// //         <h3>Applied Container Details</h3>
// //         <p>{`${appliedDetails.count}*${appliedDetails.size}|${appliedDetails.commodity}`}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContainerDetail;

// import React, { useState, useEffect } from 'react';
// import containerTypes from './container-types.json';
// import containerSizes from './container-size.json';
// import { COMMODITY_NAME_MAPPING } from './commodities.js';
// import './container.css';

// const ContainerDetail = ({ onApply }) => {
//   // Verify the structure of COMMODITY_NAME_MAPPING
//   console.log('COMMODITY_NAME_MAPPING:', COMMODITY_NAME_MAPPING);

//   const commodities = Object.keys(COMMODITY_NAME_MAPPING).map((key) => ({
//     label: COMMODITY_NAME_MAPPING[key].name,
//     value: key,
//   }));

//   const initialContainerDetails = {
//     size: containerSizes[0]?.label || 'Default Size',
//     type: containerTypes[0]?.label || 'Default Type',
//     commodity: commodities[0]?.label || 'Default Commodity', // Set default commodity
//     weight: '18 MT',
//     count: 1,
//   };

//   const [details, setDetails] = useState(initialContainerDetails);
//   const [appliedDetails, setAppliedDetails] = useState(initialContainerDetails);

//   useEffect(() => {
//     if (commodities.length === 0) {
//       console.warn('Commodities list is empty or key is incorrect.');
//     }
//   }, [commodities]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setAppliedDetails(details);
//     onApply(details);
//   };

//   return (
//     <div className="container-detail">
//       <h2>Container Details</h2>
//       <div className="current-details-box">
//         <h3>Current Container Details</h3>
//         <p>Size: {details.size}</p>
//         <p>Type: {details.type}</p>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="size">Size</label>
//           <select name="size" id="size" value={details.size} onChange={handleChange}>
//             {containerSizes.map((size) => (
//               <option key={size.value} value={size.label}>
//                 {size.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="type">Type</label>
//           <select name="type" id="type" value={details.type} onChange={handleChange}>
//             {containerTypes.map((type) => (
//               <option key={type.value} value={type.label}>
//                 {type.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="commodity">Commodity</label>
//           <select name="commodity" id="commodity" value={details.commodity} onChange={handleChange}>
//             {commodities.map((commodity) => (
//               <option key={commodity.value} value={commodity.label}>
//                 {commodity.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="weight">Weight</label>
//           <input type="text" id="weight" name="weight" value={details.weight} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="count">Count</label>
//           <input type="number" id="count" name="count" value={details.count} onChange={handleChange} />
//         </div>
//         <button type="submit" className="apply-button">Apply Changes</button>
//       </form>
//       <div className="applied-details-box">
//         <h3>Applied Container Details</h3>
//         <p>{`${appliedDetails.count}*${appliedDetails.size}|${appliedDetails.commodity}`}</p>
//       </div>
//     </div>
//   );
// };

// export default ContainerDetail;








import React, { useState, useEffect } from 'react';
import containerTypes from './container-types.json';
import containerSizes from './container-size.json';
import { COMMODITY_NAME_MAPPING } from './commodities.js';
import './container.css';

const ContainerDetail = ({ onApply }) => {
  console.log('COMMODITY_NAME_MAPPING:', COMMODITY_NAME_MAPPING);

  const commodities = Object.keys(COMMODITY_NAME_MAPPING).map((key) => ({
    label: COMMODITY_NAME_MAPPING[key].name,
    value: key,
  }));

  const initialContainerDetails = {
    size: containerSizes[0]?.label || 'Default Size',
    type: containerTypes[0]?.label || 'Default Type',
    commodity: commodities[0]?.label || 'Default Commodity',
    weight: '18 MT',
    count: 1,
  };

  const [details, setDetails] = useState(initialContainerDetails);
  const [appliedDetails, setAppliedDetails] = useState(initialContainerDetails);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (commodities.length === 0) {
      console.warn('Commodities list is empty or key is incorrect.');
    }
  }, [commodities]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppliedDetails(details);
    onApply(details);
    setDropdownOpen(false);
  };

  return (
    


     <div className="container-detail">
      <h2>Container Details</h2>
      <div className="current-details-box" onClick={() => setDropdownOpen(!dropdownOpen)}>
       
        <p> <mark> {appliedDetails.count} x {appliedDetails.size} | {appliedDetails.type} | {appliedDetails.commodity}</mark> </p>
        <button type="button">{dropdownOpen ? 'v' : '^'}</button>

      </div>
      {dropdownOpen && (
        <form onSubmit={handleSubmit} className="dropdown-form">
          <div className="form-group">
            <label htmlFor="size">Size</label>
            <div className="radio-group">
              {containerSizes.map((size) => (
                <label key={size.value}>
                  <input
                    type="radio"
                    name="size"
                    value={size.label}
                    checked={details.size === size.label}
                    onChange={handleChange}
                  />
                  {size.label}
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <div className="radio-group">
              {containerTypes.map((type) => (
                <label key={type.value}>
                  <input
                    type="radio"
                    name="type"
                    value={type.label}
                    checked={details.type === type.label}
                    onChange={handleChange}
                  />
                  {type.label}
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="commodity">Commodity</label>
            <select
              name="commodity"
              id="commodity"
              value={details.commodity}
              onChange={handleChange}
            >
              {commodities.map((commodity) => (
                <option key={commodity.value} value={commodity.label}>
                  {commodity.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Total Weight per Ctr.</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={details.weight}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="count">Count</label>
            <input
              type="number"
              id="count"
              name="count"
              value={details.count}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="apply-button">Apply</button>
        </form>
      )}

    </div>
  );
};

export default ContainerDetail;
