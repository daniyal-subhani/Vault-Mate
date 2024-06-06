"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

export default function Passwords() {
  const [passwords, setPasswords] = useState([]);
  const [isCopy, setIsCopy] = useState(false);
  const [editingPassword, setEditingPassword] = useState(null)

  useEffect(() => {
    const fetchAllPasswords = async () => {
      const response = await axios.get("http://localhost:5000/allPasswords");
      setPasswords(response.data);
      console.log("Passwords are fetched successfully.");
    };
    fetchAllPasswords();
  }, []);

  const handleCopyUrl = (Password) => {
    const textToCopy = `${Password.url}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopy(true);

        setTimeout(() => {
          setIsCopy(false);
        }, 500);
      })
      .catch((err) => console.error("Failed to copy URL: ", err));
  };
  const handleCopyPassword = (Password) => {
    const textToCopy = `${Password.url}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopy(true);

        setTimeout(() => {
          setIsCopy(false);
        }, 500);
      })
      .catch((err) => console.error("Failed to copy URL: ", err));
  };

  const handleCopyUsername = (Password) => {
    const textToCopy = `${Password.username}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopy(true);

        setTimeout(() => {
          setIsCopy(false);
        }, 500);
      })
      .catch((err) => console.error("Failed to copy username: ", err));
  };

  const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/deletePassword/${id}`); // Fix the template literal
        setPasswords(passwords.filter(password => password._id !== id));
        console.log('Password deleted successfully!');
    } catch (error) {
        console.error('Error deleting password:', error);
    }
};





  return (
    <div className="p-4">
      <h1 className="text-center text-4xl font-bold p-1 m-1 text-white mx-auto ">
        Your Passwords
      </h1>
      {passwords.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          No password to Display
        </div>
      ) : (
        passwords.map((Password) => (
          <div
            key={Password._id}
            className="relative w-[75vw] mx-auto mt-12 overflow-x-auto shadow-md sm:rounded-lg"
          >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Website URL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Password
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 flex justify-between font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {Password.url}
                    <span
                      onClick={() => handleCopyUrl(Password)}
                      className="cursor-pointer"
                    >
                      <ContentPasteIcon />
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    {Password.username}
                    <span
                      onClick={() => handleCopyUsername(Password)}
                      className="relative cursor-pointer text-gray-900 left-4"
                    >
                      <ContentPasteIcon />
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {Password.password}
                    <span
                      onClick={() => handleCopyPassword(Password)}
                      className="relative cursor-pointer text-gray-900 left-4"
                    >
                      <ContentPasteIcon />
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    
                    <button
                      onClick={() => handleDelete(Password._id)}
                      className="font-medium mx-1 px-1 text-black dark:text-black hover:underline"
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )}
      {isCopy && (
        <div
          id="toast-success"
          className="fixed top-20 left-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">
            Password copied successfully.
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
