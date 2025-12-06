import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVaults } from "../store/feature/crud/actions/fetchVaults.actions";
import MiniSpinner from "./MiniSpinner";
import { IoMdEye } from "react-icons/io";

const PasswordListTable = () => {
  const dispatch = useDispatch();
  const { vaults, loading } = useSelector((state) => state.crud);
  const { session } = useSelector((state) => state.auth);

  useEffect(() => {
    const getTableData = async () => {
      const userId = session?.user?.id;
      dispatch(fetchVaults(userId));
    };
    getTableData();
  }, []);

  return (
    <section className="h-[86vh] flex">
      {loading ? (
        <div className="flex items-center justify-center gap-1">
          <div className="loading flex items-center justify-center">
            <MiniSpinner size={"xs"} variant={"muted"}></MiniSpinner>
          </div>
          <div className="text-black text-xl">Loading</div>
        </div>
      ) : vaults.length > 0 ? (
        <section className="vaultsTable pt-2 h-[86vh] w-[95vw] flex flex-col">
          <div className="tableHead bg-slate-800 rounded-t-xl">
            <ul className="grid grid-cols-[40px_1fr_1fr] text-white border-b border-gray-200 font-medium">
              <li className="flex items-center justify-center py-2">Sr.</li>
              <li className="flex items-center justify-center py-2">Name</li>
              <li className="flex items-center justify-center py-2">Actions</li>
            </ul>
          </div>
          <div className="tableData bg-green-200/50">
            <ul className="grid grid-cols-[40px_1fr_1fr] text-slate-800 border-b border-gray-200">
              <li className="flex items-center justify-center py-2">1</li>
              <li className="flex items-center justify-center py-2">Netflix</li>
              <li className="flex items-center gap-1 justify-center py-2">
                <lord-icon
                  src="https://cdn.lordicon.com/gwlusjdu.json"
                  trigger="hover"
                  colors="primary:#1d293d"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
                <lord-icon
                  src="https://cdn.lordicon.com/xyfswyxf.json"
                  trigger="hover"
                  colors="primary:#1d293d"
                  style={{ width: "23px", height: "23px" }}
                ></lord-icon>
                <IoMdEye className="text-[25px]" />
              </li>
            </ul>
          </div>
        </section>
      ) : (
        <div className="notFound gap-4 flex flex-col items-center justify-center">
          <img src="/empty-table.png" alt="empty-table" className="h-[14rem]" />
          <p className="flex flex-col gap-2 items-center justify-center">
            <span className="font-semibold">No Valut Found</span>
            <span className="text-green-500 font-semibold">
              Create New Valut Using Create New Vault Button
            </span>
          </p>
        </div>
      )}
    </section>
  );
};

export default PasswordListTable;
