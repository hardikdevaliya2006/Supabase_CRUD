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
    <section className="h-[86vh] md:w-[70vw] flex">
      {loading ? (
        <div className="flex items-center md:w-[70vw] justify-center gap-1">
          <div className="loading flex items-center justify-center">
            <MiniSpinner size={"xs"} variant={"muted"}></MiniSpinner>
          </div>
          <div className="text-black text-xl">Loading</div>
        </div>
      ) : vaults.length > 0 ? (
        <section className="vaultsTable pt-2 h-[86vh] w-[95vw] flex flex-col">
          <div className="tableHead bg-slate-800 rounded-t-xl">
            <ul className="grid grid-cols-[40px_40px_1fr_1fr] md:grid-cols-[40px_40px_1fr_1fr_1fr] xl:grid-cols-[40px_40px_1fr_1fr_1fr_1fr] text-white border-b border-gray-200 font-medium">
              <li className="flex items-center justify-center py-2">Sr.</li>
              <li className="flex items-center justify-center py-2">Icon</li>
              <li className="flex items-center justify-center py-2">Name</li>
              <li className="md:flex hidden items-center justify-center py-2">Password</li>
              <li className="xl:flex hidden items-center justify-center py-2">Platform URL</li>
              <li className="flex items-center justify-center py-2">Actions</li>
            </ul>
          </div>
          <div className="tableData hide-scrollbar overflow-y-scroll h-[80vh] flex-col flex rounded-xl">
            {vaults.map((vault, index) => (
              <ul className={`${index+1 == vaults.length ? "rounded-b-xl" : ""} grid bg-green-200/50 grid-cols-[40px_40px_1fr_1fr] md:grid-cols-[40px_40px_1fr_1fr_1fr] xl:grid-cols-[40px_40px_1fr_1fr_1fr_1fr] text-slate-800`}>
                <li className="flex items-center justify-center py-2">
                  {++index}
                </li>
                <li className="flex items-center justify-center py-2">
                  <img
                    src={vault?.logo_url}
                    className="w-7 h-7 lg:w-8 lg:h-8 rounded"
                    alt="brand"
                  />
                </li>
                <li className="flex items-center justify-center py-2">
                  <p>{vault?.title}</p>
                </li>
                <li className="md:flex hidden items-center justify-center py-2">
                  <span>******</span>
                  <span>
                    <lord-icon
                      style={{
                        width: "25px",
                        height: "25px",
                        paddingTop: "3px",
                        paddingLeft: "3px",
                      }}
                      src="https://cdn.lordicon.com/iykgtsbt.json"
                      trigger="hover"
                    ></lord-icon>
                  </span>
                </li>
                <li className="xl:flex hidden items-center justify-center py-2">
                  <span>{vault?.platform_url}</span>
                </li>
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
                </li>
              </ul>
            ))}
          </div>
        </section>
      ) : (
        <div className="notFound gap-4 flex flex-col items-center justify-center">
          <img src="/empty-table.png" alt="empty-table" className="h-56" />
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
