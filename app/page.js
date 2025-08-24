"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, BookOpen, Brain, Zap, Users, Target, CheckCircle, Star, Play, Sparkles, ChevronDown, Youtube, Globe, MessageSquare, BookMarked, Lightbulb, TrendingUp, Award, Clock, Moon, Sun, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSectionIndex = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(currentSectionIndex);
      
      // Show/hide navbar based on scroll direction
      if (scrollPosition < 100) {
        // Always show navbar near the top
        setShowNavbar(true);
      } else if (scrollPosition > lastScrollY) {
        // Scrolling down - hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up - show navbar
        setShowNavbar(true);
      }
      
      setLastScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * (currentSection + 1),
      behavior: 'smooth'
    });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navigationItems = [
    { name: 'Dashboard', onClick: () => router.push('/dashboard') },
    { name: 'Contact', onClick: () => router.push('/contact') },
    { name: 'Help', onClick: () => router.push('/help') },
  ];

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "AI-Powered Content Generation",
      description: "Create personalized study materials, flashcards, and quizzes instantly using advanced AI technology.",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-purple-600" />,
      title: "Comprehensive Study Materials",
      description: "Get detailed chapter notes, summaries, and structured learning paths tailored to your needs.",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Interactive Learning",
      description: "Engage with dynamic flashcards, quizzes, and Q&A sessions to reinforce your knowledge.",
    },
    {
      icon: <Target className="w-12 h-12 text-green-600" />,
      title: "Adaptive Difficulty",
      description: "Choose your learning level - Easy, Moderate, or Hard - and let AI adapt to your pace.",
    }
  ];

  const problems = [
    {
      icon: <Youtube className="w-8 h-8 text-red-500" />,
      title: "YouTube Overload",
      description: "Jumping between countless tutorials without a clear path",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Website Clutter",
      description: "Getting lost in multiple websites and resources",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: "No Clear Direction",
      description: "Confusion about where to start and what to learn next",
    }
  ];

  const solutions = [
    {
      icon: <BookMarked className="w-10 h-10 text-purple-600" />,
      title: "Dedicated Learning Path",
      description: "AI creates a structured, personalized curriculum tailored to your goals and skill level",
      benefit: "90% faster learning progression"
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-600" />,
      title: "Smart Content Generation",
      description: "Automatically generates notes, chapters, flashcards, and quizzes based on your chosen topic",
      benefit: "Save 10+ hours per course"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-green-600" />,
      title: "Progressive Difficulty",
      description: "Start easy and gradually increase complexity as you master each concept",
      benefit: "95% completion rate"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Beginner Developer",
      content: "I was overwhelmed by all the scattered resources online. AI-LMS gave me a clear, structured path from day one. No more jumping between YouTube videos!",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      content: "The AI-generated study materials are incredibly accurate. I went from struggling with concepts to acing my exams in just one semester.",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "Mike Rodriguez",
      role: "Career Switcher",
      content: "As someone changing careers, I needed focused learning. The adaptive difficulty helped me progress at my own pace without feeling lost.",
      rating: 5,
      avatar: "🚀"
    }
  ];

  const bgClass = isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50';
  const textClass = isDark ? 'text-white' : 'text-slate-800';
  const subtextClass = isDark ? 'text-gray-300' : 'text-slate-600';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const borderClass = isDark ? 'border-gray-700' : 'border-slate-100';

  return (
    <>
    <div className="overflow-x-hidden">
      
      {/* Navigation Header */}
      <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <div className={`${isDark ? 'bg-gray-800/10' : 'bg-white/10'} backdrop-blur-lg rounded-full border ${isDark ? 'border-gray-700/50' : 'border-white/20'} shadow-lg px-6 py-3`}>
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI-LMS
                </h1>
              </div>
              
              {/* Center Navigation - Desktop */}
              <div className="hidden lg:flex items-center pl-28 space-x-8">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium text-sm transition-colors duration-200 hover:scale-105 transform`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              
              {/* Right side - Desktop */}
              <div className="hidden lg:flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'} transition-colors duration-200 rounded-full`}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>

                <Button
                  onClick={() => router.push('/dashboard')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </Button> 
              </div>
              
              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className={`${isDark ? 'text-gray-300 hover:bg-gray-700/50' : 'text-gray-700 hover:bg-gray-100/50'} rounded-full`}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`${isDark ? 'text-gray-300 hover:bg-gray-700/50' : 'text-gray-700 hover:bg-gray-100/50'} rounded-full`}
                >
                  {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`lg:hidden mt-2 ${isDark ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-lg rounded-2xl border ${isDark ? 'border-gray-700/50' : 'border-white/20'} shadow-lg p-4`}>
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      item.onClick();
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'} font-medium transition-colors duration-200`}
                  >
                    {item.name}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    router.push('/dashboard');
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl text-sm font-medium shadow-lg"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </nav>

      {/* Section 1: Hero */}
      <section className={`min-h-screen flex items-center justify-center relative ${bgClass} overflow-hidden pt-24`}>
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12`}>
          <div className={`inline-flex items-center px-4 sm:px-6 py-3 ${cardBg} backdrop-blur-sm rounded-full border ${borderClass} mb-8 shadow-lg`}>
            <Sparkles className="w-5 h-5 text-blue-600 mr-3 animate-spin [animation-duration:2s]" />
            <span className="text-sm font-semibold text-blue-800">Next-Generation Learning Platform</span>
          </div>
          
          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Learning
            </span>
            <br />
            <span className={textClass}>Management System</span>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl ${subtextClass} mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed`}>
            Transform your learning experience with AI-powered study materials. Generate personalized content, 
            interactive flashcards, and adaptive quizzes in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <Button 
              size="lg" 
              onClick={() => router.push('/dashboard')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all w-full sm:w-auto"
            >
              Start Learning Now
              <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className={`border-2 ${borderClass} hover:border-blue-500 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold ${cardBg} backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto`}
            >
              <Play className="mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12">
            {[
              { icon: <CheckCircle className="w-6 h-6 text-green-500" />, text: "Free to Get Started" },
              { icon: <CheckCircle className="w-6 h-6 text-green-500" />, text: "AI-Powered" },
              { icon: <CheckCircle className="w-6 h-6 text-green-500" />, text: "Instant Results" }
            ].map((item, index) => (
              <div key={index} className="flex items-center hover:scale-105 transition-transform duration-300">
                {item.icon}
                <span className={`ml-2 font-medium ${subtextClass}`}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
          onClick={scrollToNext}
        >
          <ChevronDown className={`w-8 h-8 ${subtextClass} hover:text-blue-600 transition-colors duration-300`} />
        </div>
      </section>

      {/* Section 2: Why AI-LMS? */}
      <section className={`min-h-screen flex items-center justify-center ${bgClass} relative overflow-hidden py-16`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mb-6 sm:mb-8">The Problem Every Learner Faces</h3>
              <div className="space-y-4 sm:space-y-6">
                {problems.map((problem, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start p-4 sm:p-6 ${cardBg} rounded-2xl border ${borderClass} hover:scale-105 transition-all duration-300 shadow-lg`}
                  >
                    <div className={`p-2 sm:p-3 ${isDark ? 'bg-gray-700' : 'bg-slate-100'} rounded-xl mr-4 backdrop-blur-sm`}>
                      {problem.icon}
                    </div>
                    <div>
                      <h4 className={`text-lg sm:text-xl font-semibold ${textClass} mb-2`}>{problem.title}</h4>
                      <p className={subtextClass}>{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-green-500 mb-6 sm:mb-8">Our AI-Powered Solution</h3>
              <div className="space-y-4 sm:space-y-6">
                {solutions.map((solution, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start p-4 sm:p-6 ${cardBg} rounded-2xl border ${borderClass} hover:scale-105 transition-all duration-300 shadow-lg`}
                  >
                    <div className={`p-2 sm:p-3 ${isDark ? 'bg-gray-700' : 'bg-slate-100'} rounded-xl mr-4 backdrop-blur-sm`}>
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg sm:text-xl font-semibold ${textClass} mb-2`}>{solution.title}</h4>
                      <p className={`${subtextClass} mb-3`}>{solution.description}</p>
                      <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-green-500/20 text-green-500 rounded-full text-xs sm:text-sm font-semibold">
                        {solution.benefit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
          onClick={scrollToNext}
        >
          <ChevronDown className={`w-8 h-8 ${subtextClass} hover:text-blue-600 transition-colors duration-300`} />
        </div>
      </section>

      {/* Section 3: Features */}
      <section className={`min-h-screen flex items-center justify-center ${bgClass} overflow-hidden py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-5xl md:text-6xl font-bold ${textClass} mb-6 sm:mb-8`}>
              Powerful Features for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Modern Learning</span>
            </h2>
            <p className={`text-lg sm:text-xl ${subtextClass} max-w-3xl mx-auto`}>
              Discover how our AI-powered platform revolutionizes the way you create and consume educational content.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group ${cardBg} p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl border ${borderClass} hover:border-blue-200 transform hover:-translate-y-2 transition-all duration-500 hover:scale-105`}
              >
                <div className={`mb-4 sm:mb-6 p-3 sm:p-4 ${isDark ? 'bg-gray-700' : 'bg-gradient-to-br from-slate-50 to-blue-50'} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold ${textClass} mb-3 sm:mb-4 text-center group-hover:text-blue-600 transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className={`${subtextClass} leading-relaxed text-center text-sm sm:text-base`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
          onClick={scrollToNext}
        >
            <ChevronDown className={`w-8 h-8 ${subtextClass} hover:text-blue-600 transition-colors duration-300`} />
        </div>
      </section>

      {/* Section 4: Interactive Demo */}
      <section className={`min-h-screen flex items-center justify-center ${bgClass} relative overflow-hidden py-16`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className={`text-3xl sm:text-5xl md:text-6xl font-bold ${textClass} mb-6 sm:mb-8`}>
                See AI-LMS in Action
              </h2>
              <p className={`text-lg sm:text-xl ${subtextClass} mb-8 sm:mb-10 leading-relaxed`}>
                Watch how our AI transforms any topic into a complete learning experience in seconds.
                From course outline to interactive quizzes - all generated automatically.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />, text: "Generate content in under 60 seconds" },
                  { icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />, text: "AI adapts to your learning style" },
                  { icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, text: "Personalized difficulty progression" },
                  { icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />, text: "Complete course materials included" }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${textClass} hover:scale-105 transition-transform duration-300`}>
                    <div className={`p-2 ${isDark ? 'bg-gray-700' : 'bg-blue-100'} rounded-lg mr-3 sm:mr-4`}>
                      {item.icon}
                    </div>
                    <span className="text-base sm:text-lg font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                onClick={() => router.push('/dashboard')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Try It Now - Free
                <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>

            <div className="relative">
              <div className={`${cardBg} backdrop-blur-lg rounded-3xl p-6 sm:p-8 border ${borderClass} shadow-2xl`}>
                <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-lg`}>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
                    <span className={`ml-3 sm:ml-4 text-sm ${subtextClass} font-medium`}>AI Course Generator</span>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${subtextClass} mr-3 w-12`}>Topic:</span>
                      <div className="h-2 sm:h-3 bg-blue-200 rounded flex-1 animate-pulse"></div>
                    </div>
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${subtextClass} mr-3 w-12`}>Level:</span>
                      <div className="h-2 sm:h-3 bg-purple-200 rounded w-1/3 animate-pulse"></div>
                    </div>
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${subtextClass} mr-3 w-12`}>Type:</span>
                      <div className="h-2 sm:h-3 bg-green-200 rounded w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className={`${isDark ? 'bg-gray-700/80' : 'bg-white/80'} rounded-2xl p-4 sm:p-6 backdrop-blur-sm`}>
                  <h4 className={`font-bold ${textClass} mb-3`}>Generated Content:</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3" />
                      <span className={`${subtextClass} text-sm sm:text-base`}>Course Outline Created</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3" />
                      <span className={`${subtextClass} text-sm sm:text-base`}>Chapter Notes Generated</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3" />
                      <span className={`${subtextClass} text-sm sm:text-base`}>Flashcards Ready</span>
                    </div>
                    <div className="flex items-center animate-pulse">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full mr-2 sm:mr-3 animate-spin"></div>
                      <span className={`${subtextClass} text-sm sm:text-base`}>Generating Quizzes...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
          onClick={scrollToNext}
        >
            <ChevronDown className={`w-8 h-8 ${subtextClass} hover:text-blue-600 transition-colors duration-300`} />
          </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className={`min-h-screen flex items-center justify-center ${bgClass} overflow-hidden py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-5xl md:text-6xl font-bold ${textClass} mb-6 sm:mb-8`}>
              Loved by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learners Worldwide</span>
            </h2>
            <p className={`text-lg sm:text-xl ${subtextClass} max-w-3xl mx-auto`}>
              Join thousands who transformed their learning journey from chaos to clarity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group ${cardBg} p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl border ${borderClass} transform hover:-translate-y-2 transition-all duration-500 hover:scale-105`}
              >
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{testimonial.avatar}</div>
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className={`${subtextClass} mb-4 sm:mb-6 leading-relaxed italic text-center text-sm sm:text-base group-hover:${textClass} transition-colors duration-300`}>
                  "{testimonial.content}"
                </p>
                <div className="text-center">
                  <div className={`font-bold ${textClass} text-base sm:text-lg`}>{testimonial.name}</div>
                  <div className={`${subtextClass} text-sm sm:text-base`}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
          onClick={scrollToNext}
        >
            <ChevronDown className={`w-8 h-8 ${subtextClass} hover:text-blue-600 transition-colors duration-300`} />
          </div>
      </section>

      {/* Section 6: CTA */}
      <section className={`min-h-screen flex items-center justify-center ${bgClass} relative overflow-hidden py-16`}>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl sm:text-5xl md:text-7xl font-bold ${textClass} mb-6 sm:mb-8`}>
              Ready to Transform Your Learning?
            </h2>
            <p className={`text-lg sm:text-2xl ${subtextClass} mb-8 sm:mb-12 leading-relaxed`}>
              Join thousands of students and professionals who are already using AI to accelerate their learning journey.
              <br />
              <span className="text-blue-600 font-semibold">Start creating your first course in under 60 seconds.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
              <Button 
                size="lg" 
                onClick={() => router.push('/dashboard')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 sm:px-16 py-5 sm:py-6 text-xl sm:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all w-full sm:w-auto"
              >
                Create Your First Course
                <ArrowRight className="ml-4 w-6 h-6 sm:w-7 sm:h-7" />
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => router.push('/contact')}
                className={`border-2 ${borderClass} ${textClass} hover:bg-blue-100 px-12 sm:px-16 py-5 sm:py-6 text-xl sm:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto`}
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mr-2" />
                <span className={`text-base sm:text-lg ${subtextClass}`}>No credit card required</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2" />
                <span className={`text-base sm:text-lg ${subtextClass}`}>Start in 60 seconds</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-2" />
                <span className={`text-base sm:text-lg ${subtextClass}`}>Free forever plan</span>
              </div>
            </div>
          </div>
      </section>
    </div>
    </>
  )
}