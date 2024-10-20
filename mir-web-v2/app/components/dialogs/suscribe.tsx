import { Dialog, DialogContent, Box } from '@mui/material';

interface SubscribeDialogProps {
    open: boolean;
    message: string;
    onClose: () => void;
}

export default function SubscribeDialog({ open, message, onClose }: SubscribeDialogProps) {
    return (
        <Dialog open={open} onClose={onClose}
            PaperProps={{
                sx: {
                    backgroundColor: "#F6F3EA",
                    borderRadius: "40px",
                    padding: "20px",
                },
            }}>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap="24px" >
                    {message}
                </Box>
            </DialogContent>

        </Dialog>
    );
}
