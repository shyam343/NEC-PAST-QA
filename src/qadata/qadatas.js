const questions = [
    {
      questionText: '1. Who is the father of Artificial Intelligence?',
      options: [
        { answerText: 'Alan Turing', isCorrect: false },
        { answerText: 'Charles Babbage', isCorrect: false },
        { answerText: 'John McCarthy', isCorrect: true },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionText: '2. Which is not a “cost plus”contract?',
      options: [
        { answerText: 'Cost plus lump sum contract', isCorrect: true },
        { answerText: 'Cost plus fixed fee ', isCorrect: false },
        { answerText: 'Cost plus incentive fee', isCorrect: false },
        { answerText: 'Cost plus percentage fee', isCorrect: false },
      ],
    },
    {
      questionText: '3. First expert system was developed in which year?',
      options: [
        { answerText: '1980', isCorrect: false },
        { answerText: '1975', isCorrect: false },
        { answerText: '1955', isCorrect: false },
        { answerText: '1965', isCorrect: true },
      ],
    },
    {
      questionText: '4. Next name of simple SR flip-flop?',
      options: [
        { answerText: 'Monostable multivibrator', isCorrect: false },
        { answerText: 'A bistable multivibrator', isCorrect: true },
        { answerText: 'Astable multivibrator', isCorrect: false },
        { answerText: 'Negative edge-triggered flip-flop', isCorrect: false },
      ],
    },
    {
      questionText: '5. Alternative name for pipelining:',
      options: [
        { answerText: 'Assembly line operation', isCorrect: true },
        { answerText: 'Load balancing', isCorrect: false },
        { answerText: 'Data buffering', isCorrect: false },
        { answerText: 'Context switching', isCorrect: false },
      ],
    },
    {
      questionText: '6. Number of interrupts in 8085:',
      options: [
        { answerText: '8', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '13', isCorrect: true },
        { answerText: '10', isCorrect: false },
      ],
    },
    {
      questionText: '7. Which is not a non-maskable interrupt in 8085?',
      options: [
        { answerText: 'RST7.5', isCorrect: false },
        { answerText: 'INTR', isCorrect: false },
        { answerText: 'RST6.5', isCorrect: false },
        { answerText: 'TRAP', isCorrect: true },
      ],
    },
    {
      questionText: '8. Terminal voltage and EMF relation:',
      options: [
        { answerText: 'Terminal voltage is greater than EMF', isCorrect: false },
        { answerText: 'Terminal voltage is equal to EMF', isCorrect: false },
        { answerText: 'Terminal voltage is less than EMF', isCorrect: true },
        { answerText: 'No relation between terminal voltage and EMF', isCorrect: false },
      ],
    },
    {
      questionText: '9. Resistance in delta is 3 ohms, what is it in star?',
      options: [
        { answerText: '1 ohm', isCorrect: true },
        { answerText: '2 ohms', isCorrect: false },
        { answerText: '4 ohms', isCorrect: false },
        { answerText: '3 ohms', isCorrect: false },
      ],
    },
    {
      questionText: '10. Naive Bayes is:',
      options: [
        { answerText: 'Unsupervised learning', isCorrect: false },
        { answerText: 'Supervised learning', isCorrect: true },
        { answerText: 'Semi-supervised learning', isCorrect: false },
        { answerText: 'Reinforcement learning', isCorrect: false },
      ],
    },
    {
      questionText: '11. A 4:16 code converter/decoder has input and output:',
      options: [
        { answerText: 'Hexadecimal and Binary', isCorrect: false },
        { answerText: 'Decimal and Binary', isCorrect: false },
        { answerText: 'Octal and Decimal', isCorrect: false },
        { answerText: 'Binary and Hexadecimal', isCorrect: true },
      ],
    },
    {
      questionText: '12. Encoder building block:',
      options: [
        { answerText: 'OR gate', isCorrect: true },
        { answerText: 'AND gate', isCorrect: false },
        { answerText: 'NAND gate', isCorrect: false },
        { answerText: 'XOR gate', isCorrect: false },
      ],
    },
    {
      questionText: '13. int *p,u; float *y,x; what next?',
      options: [
        { answerText: 'x = &u;', isCorrect: false },
        { answerText: 'p = &y;', isCorrect: false },
        { answerText: 'p = &u;', isCorrect: true },
        { answerText: 'y = &u;', isCorrect: false },
        
      ],
    },
    {
      questionText: '14. Which of the following is not a format specifier in C?',
      options: [
        { answerText: '%d', isCorrect: false },
        { answerText: '%t', isCorrect: true },
        { answerText: '%f', isCorrect: false },
        { answerText: '%c', isCorrect: false },
        
      ],
    },
    {
      questionText: '15. What is a stable filter?',
      options: [
        { answerText: 'RC filter', isCorrect: false },
        { answerText: 'LC filter', isCorrect: false },
        { answerText: 'Active filter', isCorrect: false },
        { answerText: 'Crystal oscillator', isCorrect: true },
      ],
    },
    {
      questionText: '16. Frequency in AC is measured by:',
      options: [
        { answerText: 'Number of waves per second', isCorrect: true },
        { answerText: 'Number of volts per second', isCorrect: false },
        { answerText: 'Number of currents per second', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
        
      ],
    },
    {
      questionText: '17. Auditor appointed by:',
      options: [
        { answerText: 'Management', isCorrect: false },
        { answerText: 'Shareholders', isCorrect: false },
        { answerText: 'NEC', isCorrect: true },
        { answerText: 'Board of Directors', isCorrect: false },
        
      ],
    },
    {
      questionText: '18. Binary transmission in OSI layer happens at:',
      options: [
        { answerText: 'Data Link layer', isCorrect: false },
        { answerText: 'Transport layer', isCorrect: false },
        { answerText: 'Network layer', isCorrect: false },
        { answerText: 'Physical layer', isCorrect: true },
      ],
    },
    {
      questionText: '19. PDA represents:',
      options: [
        { answerText: 'Type 2 grammar', isCorrect: true },
        { answerText: 'Type 3 grammar', isCorrect: false },
        { answerText: 'Type 1 grammar', isCorrect: false },
        { answerText: 'Type 0 grammar', isCorrect: false },
        
      ],
    },
    {
      questionText: '20. Universal Turing machine is:',
      options: [
        { answerText: 'Fixed', isCorrect: false },
        { answerText: 'Finite', isCorrect: false },
        { answerText: 'Programmable', isCorrect: true },
        { answerText: 'Non-programmable', isCorrect: false },
        
      ],
    },
    {
      questionText: '21. What is an encrypted message called?',
      options: [
        { answerText: 'Plaintext', isCorrect: false },
        { answerText: 'Key', isCorrect: false },
        { answerText: 'Hash', isCorrect: false },
        { answerText: 'Ciphertext', isCorrect: true },
      ],
    },
    {
      questionText: '22. Test to determine intelligence:',
      options: [
        { answerText: 'Turing', isCorrect: true },
        { answerText: 'IQ', isCorrect: false },
        { answerText: 'Emotional', isCorrect: false },
        { answerText: 'Cognitive', isCorrect: false },
      ],
    },
    {
      questionText: '23. BIOS used by:',
      options: [
        
        { answerText: 'Application software', isCorrect: false },
        { answerText: 'Operating system', isCorrect: true },
        { answerText: 'Device drivers', isCorrect: false },
        { answerText: 'Firmware', isCorrect: false },
      ],
    },
    {
      questionText: '24. Real-time operation depends on:',
      options: [
        
        { answerText: 'Processor speed', isCorrect: false },
        { answerText: 'Memory size', isCorrect: false },
        { answerText: 'Network bandwidth', isCorrect: false },
        { answerText: 'Something and time', isCorrect: true },
      ],
    },
    {
      questionText: '25. Distance vector routing depends on:',
      options: [
        { answerText: 'Hop counts', isCorrect: true },
        { answerText: 'Bandwidth', isCorrect: false },
        { answerText: 'Latency', isCorrect: false },
        { answerText: 'Packet size', isCorrect: false },
      ],
    },
    {
      questionText: '26. Propagation delay is caused by:',
      options: [
        
        { answerText: 'Network congestion', isCorrect: false },
        { answerText: 'Packet loss', isCorrect: false },
        { answerText: 'Distance between routers', isCorrect: true },
        { answerText: 'Error correction', isCorrect: false },
      ],
    },
    {
      questionText: '27. Maximum nodes a binary tree can have based on height h?',
      options: [
        
        { answerText: '2^h', isCorrect: false },
        { answerText: '2^h - 1', isCorrect: true },
        { answerText: '2^(h+1) - 1', isCorrect: false },
        { answerText: '2^(h-1)', isCorrect: false },
      ],
    },
    {
      questionText: '28. Requirement of a binary tree:',
      options: [
        { answerText: 'Must be sorted', isCorrect: false },
        { answerText: 'Nodes must have two children', isCorrect: false },
        { answerText: 'Must have a root', isCorrect: true },
        { answerText: 'All nodes must be balanced', isCorrect: false },
        
      ],
    },
    {
      questionText: '29. Which resizes an object:',
      options: [
        { answerText: 'Scaling', isCorrect: true },
        { answerText: 'Cropping', isCorrect: false },
        { answerText: 'Rotating', isCorrect: false },
        { answerText: 'Filtering', isCorrect: false },
      ],
    },
    {
      questionText: '30. Which process runs after Kernel bootstrap is executed?',
      options: [
        { answerText: 'System shutdown', isCorrect: false },
        { answerText: 'User login', isCorrect: false },
        { answerText: '/etc/init.d', isCorrect: true },
        { answerText: 'Network configuration', isCorrect: false },
      ],
    },
    {
      questionText: '31. Networking application layer related:',
      options: [
        { answerText: 'User to system application', isCorrect: true },
        { answerText: 'System to hardware application', isCorrect: false },
        { answerText: 'User to network application', isCorrect: false },
        { answerText: 'System to user application', isCorrect: false },
      ],
    },
    {
      questionText: '32. 2D rotation is performed on which plane?',
      options: [
        
        { answerText: '3D plane', isCorrect: false },
        { answerText: '2D plane', isCorrect: true },
        { answerText: 'XY plane', isCorrect: false },
        { answerText: 'XZ plane', isCorrect: false },
      ],
    },
    {
      questionText: '33.Essential Implicant:',
      options: [
        { answerText: 'Complement', isCorrect: false },
        { answerText: 'Unessential implicant', isCorrect: false },
        { answerText: 'Non-essential implicant', isCorrect: false },
        { answerText: 'Prime implicant', isCorrect: true },
      ],
    },
    {
      questionText: '34. Which one has priority in 8086?',
      options: [
        { answerText: 'NMI', isCorrect: true },
        { answerText: 'Overflow', isCorrect: false },
        { answerText: 'Divide by zero', isCorrect: false },
        { answerText: 'None', isCorrect: false },
      ],
    },
    {
      questionText: '35. How many 16-bit registers are in 8085?',
      options: [
        
        { answerText: '4', isCorrect: false },
        { answerText: '1', isCorrect: false },
        { answerText: '2', isCorrect: true },
        { answerText: '8', isCorrect: false },
      ],
    },
    {
      questionText: '36. Purpose of Wait-for graph:',
      options: [
        
        { answerText: 'Resource allocation', isCorrect: false },
        { answerText: 'Deadlock detection', isCorrect: true },
        { answerText: 'Process scheduling', isCorrect: false },
        { answerText: 'Memory management', isCorrect: false },
      ],
    },
    {
      questionText: '37. Purpose of special processor:',
      options: [
        
        { answerText: 'General purpose', isCorrect: false },
        { answerText: 'Standard operations', isCorrect: false },
        { answerText: 'Basic computations', isCorrect: false },
        { answerText: 'Special function', isCorrect: true },
      ],
    },
    {
      questionText: '38. Load in network:',
      options: [
        { answerText: 'Congestion', isCorrect: true },
        { answerText: 'Latency', isCorrect: false },
        { answerText: 'Throughput', isCorrect: false },
        { answerText: 'Bandwidth', isCorrect: false },
      ],
    },
    {
      questionText: '39. Bus is:',
      options: [
        
        { answerText: 'Error detection', isCorrect: false },
        { answerText: 'Data storage', isCorrect: false },
        { answerText: 'Signal processing', isCorrect: false },
        { answerText: 'Priority handling', isCorrect: true },
      ],
    },
    {
      questionText: '40. Which one is not a combinational circuit?',
      options: [
        
        { answerText: 'Adder', isCorrect: false },
        { answerText: 'Counter', isCorrect: true },
        { answerText: 'Multiplexer', isCorrect: false },
        { answerText: 'Decoder', isCorrect: false },
      ],
    },
    
    
    
    //add more
  ];
  
  export default questions;
  