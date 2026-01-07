import { useRouteContext } from '@tanstack/react-router';

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

export const Home = () => {
    const auth = useRouteContext({ from: '/home' });

    return (
        <div>
            <Header />
            <div className="h-full px-4 pt-4">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline"> Add Perfume</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Perfume...</DialogTitle>
                            <DialogDescription>Add a new perfume</DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};
