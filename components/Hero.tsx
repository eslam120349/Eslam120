
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface LogEntry {
  id: string;
  type: 'command' | 'output' | 'error' | 'info' | 'system'; // Added 'system' for initial message
  text: string | React.ReactNode;
  hasPrompt?: boolean;
}

const generateId = () => Math.random().toString(36).substring(2, 9);

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// This initial message sequence is now defined outside the component to ensure stability.
const initialTerminalMessage = [
  {
    type: 'system' as const, // Using 'system' or 'info' type for non-command messages
    text: "Welcome to MyPortfolio Terminal. Type 'help' to view available commands.",
    prompt: false, // No user prompt for this system message
    typingSpeed: 40,
  },
];

const SectionLink: React.FC<{ sectionId: string; children: React.ReactNode }> = ({ sectionId, children }) => (
  <a
    href={`#${sectionId}`}
    className="text-terminalGreen hover:underline"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    {children}
  </a>
);

const HelpOutput: React.FC = () => (
  <div className="space-y-1">
    <div>Available commands:</div>
    <div><span className="text-terminalGreen w-20 inline-block">help</span>          - Shows this list of commands.</div>
    <div><span className="text-terminalGreen w-20 inline-block">whoami</span>        - Displays a brief introduction.</div>
    <div><span className="text-terminalGreen w-20 inline-block">greet</span>         - Shows a welcome message.</div>
    <div><span className="text-terminalGreen w-20 inline-block">about</span>         - Navigate to the About Me section.</div>
    <div><span className="text-terminalGreen w-20 inline-block">skills</span>        - Navigate to the Skills section.</div>
    <div><span className="text-terminalGreen w-20 inline-block">projects</span>      - Navigate to the Projects section.</div>
    <div><span className="text-terminalGreen w-20 inline-block">contact</span>       - Navigate to the Contact section.</div>
    <div><span className="text-terminalGreen w-20 inline-block">socials</span>       - Show social media links.</div>
    <div><span className="text-terminalGreen w-20 inline-block">clear</span>         - Clears the terminal screen.</div>
    <div><span className="text-terminalGreen w-20 inline-block">echo [text]</span>   - Prints [text] to the terminal.</div>
  </div>
);

const SocialsOutput: React.FC = () => (
    <div>
        <p>Connect with me:</p>
        <p>- LinkedIn: <a href="www.linkedin.com/in/eslam-saeid-9a8458295" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/yourusername</a></p>
    </div>
);


const Hero: React.FC = () => {
  const [log, setLog] = useState<LogEntry[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const yourName = "Eslam120"; // Replace with your actual name/nickname
  const promptStringForAnimation = "user@portfolio:~$&nbsp;"; // Used for animated commands typing effect

  const addLogEntry = useCallback((entry: Omit<LogEntry, 'id'>) => {
    setLog(prevLog => [...prevLog, { ...entry, id: generateId() }]);
  }, []);

  const typeText = useCallback(async (text: string, type: LogEntry['type'], hasPrompt?: boolean, typingSpeed = 50) => {
    const entryId = generateId();
    // For animated commands that *should* show a prompt *during* typing.
    // Our initial 'system' message has `hasPrompt: false`.
    const initialTextContent = (type === 'command' && hasPrompt) ? promptStringForAnimation : '';

    setLog(prevLog => [...prevLog, { id: entryId, type, text: initialTextContent, hasPrompt }]);

    let currentText = '';
    for (let i = 0; i < text.length; i++) {
      currentText += text[i];
      setLog(prevLog =>
        prevLog.map(entry =>
          entry.id === entryId ? { ...entry, text: initialTextContent + currentText } : entry
        )
      );
      await sleep(typingSpeed);
    }
  }, [promptStringForAnimation]);


  useEffect(() => {
    const runInitialAnimation = async () => {
      setIsAnimating(true);
      setLog([]); // Clear log on start, useful for hot-reloading environments

      for (const item of initialTerminalMessage) {
        // item.text is already a string. item.prompt is false for the initial message.
        await typeText(item.text as string, item.type, !!item.prompt, item.typingSpeed);
        await sleep(100); // Small pause after the message
      }
      setIsAnimating(false); // Allow user input
    };
    runInitialAnimation();
  }, [typeText]); // typeText is memoized with useCallback

  useEffect(() => {
    // Scroll the terminal window content, not the main page
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'auto', block: 'nearest' });
    }
  }, [log]);

  useEffect(() => {
    if (!isAnimating && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAnimating]);

  const processCommand = async (command: string) => {
    setIsProcessing(true);
    const [cmd, ...args] = command.toLowerCase().split(' ');
    const argString = args.join(' ');

    await sleep(100); // Simulate processing time

    switch (cmd) {
      case 'help':
        addLogEntry({ type: 'info', text: <HelpOutput /> });
        break;
      case 'whoami':
        addLogEntry({ type: 'output', text: "A Passionate Full-Stack Developer. I build things for the web." });
        break;
      case 'greet':
      case 'cat':
        if ((cmd === 'cat' && args.join(' ') === './greet.txt') || cmd === 'greet') {
             addLogEntry({ type: 'output', text: `Hello, World! I'm ${yourName}. Welcome to my digital space.`});
        } else if (cmd === 'cat') {
            addLogEntry({ type: 'error', text: `cat: ${args.join(' ')}: No such file or directory` });
        } else {
            addLogEntry({ type: 'error', text: `bash: command not found: ${command}` });
        }
        break;
      case 'clear':
        setLog([]);
        break;
      case 'about':
        addLogEntry({ type: 'info', text: <span>Navigating to <SectionLink sectionId="about">About Me</SectionLink>...</span> });
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        addLogEntry({ type: 'info', text: <span>Navigating to <SectionLink sectionId="skills">Skills</SectionLink>...</span> });
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        addLogEntry({ type: 'info', text: <span>Navigating to <SectionLink sectionId="projects">Projects</SectionLink>...</span> });
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        addLogEntry({ type: 'info', text: <span>Navigating to <SectionLink sectionId="contact">Contact</SectionLink>...</span> });
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'socials':
         addLogEntry({ type: 'info', text: <SocialsOutput /> });
        break;
      case 'echo':
        addLogEntry({type: 'output', text: argString });
        break;
      default:
        if (command.trim() !== '') {
          addLogEntry({ type: 'error', text: `bash: command not found: ${command}` });
        }
    }
    setIsProcessing(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCommandSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAnimating || isProcessing || !inputValue.trim()) return;

    const commandToProcess = inputValue;
    addLogEntry({ type: 'command', text: commandToProcess, hasPrompt: true });
    setInputValue(''); 

    await processCommand(commandToProcess);
  };

  return (
    <section className="min-h-[calc(80vh-4rem)] flex items-center justify-center py-16 md:py-20">
      <div className="w-full max-w-3xl bg-terminalBg shadow-2xl rounded-lg overflow-hidden border border-gray-700">
        <div className="bg-terminalHeader p-3 flex items-center space-x-2">
          <span className="h-3 w-3 bg-red-500 rounded-full"></span>
          <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
          <span className="h-3 w-3 bg-green-500 rounded-full"></span>
          <span className="text-xs text-gray-400 pl-2">bash -- My Portfolio</span>
        </div>
        <div 
          className="p-6 font-mono text-sm text-gray-200 h-96 overflow-y-auto" 
          onClick={() => !isAnimating && !isProcessing && inputRef.current?.focus()}
          role="log"
          aria-live="polite"
        >
          {log.map((entry) => (
            <div key={entry.id} className={`mb-1 ${entry.type === 'error' ? 'text-red-400' : ''} ${entry.type === 'system' ? 'text-gray-400' : ''}`}>
              {/* Part 1: Render prompt if entry.hasPrompt is true */}
              {entry.hasPrompt && (
                <>
                  <span className="text-terminalGreen">user@portfolio</span>
                  <span className="text-blue-400">:~$</span>&nbsp;
                </>
              )}
              
              {/* Part 2: Render the actual text content */}
              {(() => {
                let textToRender = entry.text;

                // If entry is a command with a prompt, and its text also starts with the prompt string (e.g. animated commands from typeText),
                // strip the prompt from textToRender because Part 1 already rendered it.
                if (entry.type === 'command' && entry.hasPrompt && typeof entry.text === 'string' && entry.text.startsWith(promptStringForAnimation)) {
                  textToRender = entry.text.substring(promptStringForAnimation.length);
                }

                // Render the processed textToRender
                if (typeof textToRender === 'string') {
                  return <span dangerouslySetInnerHTML={{ __html: textToRender }} />;
                } else {
                  // It's a ReactNode (e.g., <HelpOutput />, <SocialsOutput />, or JSX from navigation messages)
                  return textToRender;
                }
              })()}
            </div>
          ))}

          {!isAnimating && (
            <form onSubmit={handleCommandSubmit} className="flex">
              <span className="text-terminalGreen">user@portfolio</span>
              <span className="text-blue-400">:~$</span>&nbsp;
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                disabled={isProcessing}
                className="bg-transparent border-none text-gray-200 focus:outline-none flex-grow font-mono text-sm caret-terminalGreen terminal-input"
                spellCheck="false"
                autoCapitalize="none"
                autoComplete="off"
                aria-label="Terminal input"
              />
            </form>
          )}
          <div ref={terminalEndRef} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
