import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RootState } from "../store";
import { updateUser } from "../store/slices/userSlice";
import { UserFormType } from "../types";
import { Edit, Edit2Icon, Edit3Icon, PenIcon } from "lucide-react";

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string(),
  dateOfBirth: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

type UserFormData = z.infer<typeof userSchema>;

const formFields: UserFormType[] = [
  { label: "Name", name: "name", type: "text" },
  { label: "Username", name: "username", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Date of Birth", name: "dateOfBirth", type: "date" },
  {
    label: "Present Address",
    name: "presentAddress",
    type: "text",
    colSpan: "sm:col-span-2",
  },
  {
    label: "Permanent Address",
    name: "permanentAddress",
    type: "text",
    colSpan: "sm:col-span-2",
  },
  { label: "City", name: "city", type: "text" },
  { label: "Postal Code", name: "postalCode", type: "text" },
  { label: "Country", name: "country", type: "text" },
];

export default function ProfileUpdate() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: user,
  });

  const onSubmit = (data: UserFormData) => {
    dispatch(updateUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex justify-between lg:flex-row flex-col">
        <div className="relative mx-auto mb-8 lg:mb-0">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-24 w-24 rounded-full"
          />
          <div className="absolute top-16 lg:right-0 bg-black rounded-full p-2 cursor-pointer">
            <Edit2Icon color="white" height={12} width={12} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-[80%]">
          {formFields.map((field) => (
            <div key={field.name} className={""}>
              <label className="block text-sm text-[#232323]">
                {field.label}
              </label>
              <input
                type={field.type as string}
                {...register(field.name as keyof UserFormData)}
                className="mt-1 w-full rounded-xl border-[#DFEAF2] border sm:text-sm p-4 text-[#718EBF]"
                placeholder="sdfa"
              />
              {errors[field.name as keyof UserFormData] && (
                <p className="mt-1 text-sm text-red-600">
                  {errors?.[field.name as keyof UserFormData]?.message || ""}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end w-full">
        <button
          type="submit"
          className="ml-3 w-full lg:w-fit inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black "
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
