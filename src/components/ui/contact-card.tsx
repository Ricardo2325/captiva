'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { type LucideIcon, PlusIcon } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

type ContactInfoItem = {
    icon: LucideIcon;
    label: string;
    value: string;
    className?: string;
};

type ContactCardProps = {
    title?: string;
    description?: string;
    contactInfo?: ContactInfoItem[];
    className?: string;
    formSectionClassName?: string;
    children?: React.ReactNode;
};

export function ContactCard({
    title = 'Cuéntanos tu proyecto.',
    description = 'Rellena el formulario o elige cómo prefieres que nos pongamos en contacto. Te respondemos en menos de 24 horas.',
    contactInfo,
    className,
    formSectionClassName,
    children,
}: ContactCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className={cn('relative grid w-full md:grid-cols-2 lg:grid-cols-3', className)}
            style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
        >
            <PlusIcon className="absolute -top-3 -left-3 h-6 w-6" style={{ color: '#4f46e5' }} />
            <PlusIcon className="absolute -top-3 -right-3 h-6 w-6" style={{ color: '#4f46e5' }} />
            <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6" style={{ color: '#4f46e5' }} />
            <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6" style={{ color: '#4f46e5' }} />

            {/* Left section — title, description, contact info */}
            <div className="lg:col-span-2 flex flex-col justify-between">
                <div className="space-y-5 px-4 py-8 md:p-8">
                    <h2
                        className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: '#e8e8f2' }}
                    >
                        {title}
                    </h2>
                    <p className="max-w-xl text-sm md:text-base lg:text-lg" style={{ color: '#8888aa' }}>
                        {description}
                    </p>
                    {contactInfo && contactInfo.length > 0 && (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {contactInfo.map((info, i) => (
                                <ContactInfo key={i} {...info} />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right section — form / children */}
            <div
                className={cn(
                    'flex h-full w-full items-start p-5 md:col-span-1',
                    'border-t border-[#1e1e2e] md:border-t-0 md:border-l',
                    formSectionClassName,
                )}
            >
                {children}
            </div>
        </motion.div>
    );
}

function ContactInfo({ icon: Icon, label, value, className }: ContactInfoItem) {
    return (
        <div className={cn('flex items-center gap-3 py-3', className)}>
            <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)' }}>
                <Icon className="h-5 w-5" style={{ color: '#4f46e5' }} />
            </div>
            <div>
                <p className="font-medium text-sm" style={{ color: '#e8e8f2' }}>{label}</p>
                <p className="text-xs" style={{ color: '#8888aa' }}>{value}</p>
            </div>
        </div>
    );
}
