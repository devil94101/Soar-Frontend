import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { RootState } from '../store';
import { updateUser } from '../store/slices/userSlice';
import ProfileUpdate from '../components/profileUpdate';

const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  dateOfBirth: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

type UserFormData = z.infer<typeof userSchema>;

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: user,
  });

  const onSubmit = (data: UserFormData) => {
    dispatch(updateUser(data));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg">
        <div className="pt-8">
          <nav className="-mb-px flex lg:px-16 lg:gap-x-8 gap-x-2 lg:justify-start justify-between">
            <div
              onClick={() => setActiveTab('profile')}
              className={`font-medium  px-4 ${
                activeTab === 'profile' ? 'border-b-2 border-[#232323] text-[#232323]' : 'text-[#718EBF] cursor-pointer'
              }`}
            >
              Edit Profile
            </div>
            <div
              onClick={() => setActiveTab('preferences')}
              className={`font-medium px-4 ${
                activeTab === 'preferences' ? 'border-b-2 border-[#232323] text-[#232323]' : 'text-[#718EBF] cursor-pointer'
              }`}
            >
              Preferences
            </div>
            <div
              onClick={() => setActiveTab('security')}
              className={`font-medium px-4 ${
                activeTab === 'security' ? 'border-b-2 border-[#232323] text-[#232323]' : 'text-[#718EBF] cursor-pointer'
              }`}
            >
              Security
            </div>
          </nav>
        </div>  

        <div className="p-6">
          {activeTab === 'profile' && (
            <ProfileUpdate />
          )}

          {activeTab === 'preferences' && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">Preferences Coming Soon</h3>
              <p className="text-sm text-gray-500">This feature is under development.</p>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">Security Settings Coming Soon</h3>
              <p className="text-sm text-gray-500">This feature is under development.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}