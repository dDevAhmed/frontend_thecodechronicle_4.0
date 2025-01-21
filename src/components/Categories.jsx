import Button from '../ui/Button'
import { getCategoryDetails } from '../utils/category';
import { useCategories } from "../services/CategoryService"

export default function Categories() {

    const { data, isPending, isError } = useCategories()

    return (

        <div className="flex items-center gap-2 overflow-x-scroll py-1 hide-scrollbar">
            {/* //fixme - set the selection state, move to categories */}
            <Button
                classNames={'inline-flex gap-2 items-center rounded-full px-3 py-2 font-medium text-white capitalize bg-brand-primary-blue shadow'}
                style={{ fontSize: '1rem' }}
            >
                All
            </Button>
            {
                data?.map((category, index) => (
                    <Button
                        key={index}
                        classNames={'inline-flex gap-2 items-center rounded-full px-3 py-2 font-medium text-gray-600 capitalize bg-white shadow'}
                        style={{ fontSize: '1rem' }}
                    // onClick={'filter post by category'}
                    >
                        {(() => {
                            const details = getCategoryDetails(category.name);
                            if (!details) {
                                return <span>Category Not Found</span>;
                            }
                            const { name, icon: Icon, color } = details;
                            return (
                                <>
                                    {Icon && <Icon style={{ color }} />}
                                    {name}
                                </>
                            );
                        })()}
                    </Button>
                ))
            }
        </div>
    );
}
